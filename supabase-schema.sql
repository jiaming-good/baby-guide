-- ===== 育儿指南网站 Supabase 数据库表结构 =====
-- 在 Supabase Dashboard → SQL Editor 中执行此脚本

-- 1. 用户资料表
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  baby_name TEXT,
  birth_date DATE,
  gender TEXT DEFAULT 'boy',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 身高体重记录表
CREATE TABLE IF NOT EXISTS height_weight_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  height DECIMAL(5,1),
  weight DECIMAL(4,1),
  head DECIMAL(4,1),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 观察手记表
CREATE TABLE IF NOT EXISTS observation_notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT DEFAULT 'other',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 喂养记录表
CREATE TABLE IF NOT EXISTS feeding_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  type TEXT NOT NULL,
  amount DECIMAL(5,1),
  duration INTEGER,
  note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. 睡眠记录表
CREATE TABLE IF NOT EXISTS sleep_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  quality TEXT DEFAULT 'normal',
  note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 启用行级安全策略 (RLS) =====
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE height_weight_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE observation_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE feeding_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE sleep_records ENABLE ROW LEVEL SECURITY;

-- ===== profiles 策略 =====
CREATE POLICY "用户可查看自己的资料" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "用户可创建自己的资料" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "用户可更新自己的资料" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- ===== height_weight_records 策略 =====
CREATE POLICY "用户可查看自己的记录" ON height_weight_records
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "用户可创建自己的记录" ON height_weight_records
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "用户可更新自己的记录" ON height_weight_records
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "用户可删除自己的记录" ON height_weight_records
  FOR DELETE USING (auth.uid() = user_id);

-- ===== observation_notes 策略 =====
CREATE POLICY "用户可查看自己的手记" ON observation_notes
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "用户可创建自己的手记" ON observation_notes
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "用户可更新自己的手记" ON observation_notes
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "用户可删除自己的手记" ON observation_notes
  FOR DELETE USING (auth.uid() = user_id);

-- ===== feeding_records 策略 =====
CREATE POLICY "用户可查看自己的喂养记录" ON feeding_records
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "用户可创建自己的喂养记录" ON feeding_records
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "用户可更新自己的喂养记录" ON feeding_records
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "用户可删除自己的喂养记录" ON feeding_records
  FOR DELETE USING (auth.uid() = user_id);

-- ===== sleep_records 策略 =====
CREATE POLICY "用户可查看自己的睡眠记录" ON sleep_records
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "用户可创建自己的睡眠记录" ON sleep_records
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "用户可更新自己的睡眠记录" ON sleep_records
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "用户可删除自己的睡眠记录" ON sleep_records
  FOR DELETE USING (auth.uid() = user_id);

-- ===== 注册时自动创建 profile 的触发器 =====
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
