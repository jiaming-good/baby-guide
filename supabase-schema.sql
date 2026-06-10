-- =====================================================
-- 宝宝资料表 (babies) - 育儿指南网站 v5
-- =====================================================

-- 1. 创建 babies 表
CREATE TABLE IF NOT EXISTS babies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    baby_name TEXT NOT NULL,
    gender TEXT DEFAULT 'boy' CHECK (gender IN ('boy', 'girl')),
    birth_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 创建 updated_at 触发器函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. 为 babies 表添加自动更新触发器
DROP TRIGGER IF EXISTS update_babies_updated_at ON babies;
CREATE TRIGGER update_babies_updated_at
    BEFORE UPDATE ON babies
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 4. RLS 策略
ALTER TABLE babies ENABLE ROW LEVEL SECURITY;

-- 用户只能看到自己的宝宝记录
CREATE POLICY "users_can_view_own_babies" ON babies
    FOR SELECT
    USING (auth.uid() = user_id);

-- 用户只能插入自己的宝宝记录
CREATE POLICY "users_can_insert_own_babies" ON babies
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- 用户只能更新自己的宝宝记录
CREATE POLICY "users_can_update_own_babies" ON babies
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- 用户只能删除自己的宝宝记录
CREATE POLICY "users_can_delete_own_babies" ON babies
    FOR DELETE
    USING (auth.uid() = user_id);

-- 5. 索引优化
CREATE INDEX IF NOT EXISTS idx_babies_user_id ON babies(user_id);
CREATE INDEX IF NOT EXISTS idx_babies_birth_date ON babies(birth_date);

-- =====================================================
-- 更新 profiles 表，添加宝宝关联字段（可选兼容）
-- =====================================================
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS has_baby BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

COMMENT ON TABLE babies IS '宝宝资料表 - 支持多宝宝管理';
COMMENT ON COLUMN babies.is_active IS '是否为当前选中的宝宝';
