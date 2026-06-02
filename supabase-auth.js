// ===== Supabase 认证与数据同步模块 =====

const SUPABASE_URL = 'https://pvxntyjwcypfzyvkcyfk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ZajAfwtiNwEe2d0KsxjtMw_5pxAUY4u';

let supabaseClient = null;
let currentUser = null;

// ===== 初始化 Supabase 客户端 =====
function initSupabase() {
  if (typeof supabase === 'undefined' || !supabase.createClient) {
    console.error('Supabase JS 库未加载');
    return;
  }
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('✅ Supabase 客户端已初始化');

  // 监听登录状态变化
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
      currentUser = session.user;
      updateAuthUI(true);
      onUserSignedIn();
    } else if (event === 'SIGNED_OUT') {
      currentUser = null;
      updateAuthUI(false);
      onUserSignedOut();
    }
  });

  // 检查当前登录状态
  checkSession();
}

// ===== 检查当前会话 =====
async function checkSession() {
  if (!supabaseClient) return;
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    currentUser = session.user;
    updateAuthUI(true);
    onUserSignedIn();
  } else {
    updateAuthUI(false);
  }
}

// ===== 注册 =====
async function signUp(email, password) {
  if (!supabaseClient) return { error: 'Supabase 未初始化' };

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    return { error: error.message };
  }

  // 如果需要邮箱验证
  if (data.user && !data.session) {
    return { needConfirm: true, message: '注册成功！请查收邮箱验证链接，验证后即可登录。' };
  }

  return { success: true };
}

// ===== 登录 =====
async function signIn(email, password) {
  if (!supabaseClient) return { error: 'Supabase 未初始化' };

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

// ===== 退出登录 =====
async function signOutUser() {
  if (!supabaseClient) return;
  const { error } = await supabaseClient.auth.signOut();
  if (!error) {
    if (typeof showToast === 'function') showToast('已退出登录');
  }
}

// ===== 更新界面显示 =====
function updateAuthUI(isLoggedIn) {
  const authBtn = document.getElementById('auth-btn');
  const userInfo = document.getElementById('user-info');
  const loginBtn = document.getElementById('login-trigger');

  if (isLoggedIn && currentUser) {
    if (authBtn) authBtn.style.display = 'none';
    if (userInfo) {
      userInfo.style.display = 'flex';
      const emailSpan = userInfo.querySelector('.user-email');
      if (emailSpan) emailSpan.textContent = currentUser.email;
    }
    if (loginBtn) loginBtn.style.display = 'none';
  } else {
    if (authBtn) authBtn.style.display = 'inline-flex';
    if (userInfo) userInfo.style.display = 'none';
    if (loginBtn) loginBtn.style.display = 'inline-flex';
  }
}

// ===== 登录后的处理 =====
async function onUserSignedIn() {
  console.log('👤 用户已登录:', currentUser.email);
  // 从 Supabase 加载用户数据到 localStorage（供现有功能使用）
  await syncDataFromSupabase();
}

// ===== 退出后的处理 =====
function onUserSignedOut() {
  console.log('👤 用户已退出');
}

// ===== 数据同步：从 Supabase 加载到本地 =====
async function syncDataFromSupabase() {
  if (!supabaseClient || !currentUser) return;

  try {
    // 加载用户资料
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('id', currentUser.id)
      .single();

    if (profile) {
      if (profile.birth_date) localStorage.setItem('parenting_birth_date', profile.birth_date);
      if (profile.gender) localStorage.setItem('parenting_gender', profile.gender);
      if (profile.baby_name) localStorage.setItem('parenting_baby_name', profile.baby_name);
    }

    // 加载身高体重记录
    const { data: hwRecords } = await supabaseClient
      .from('height_weight_records')
      .select('*')
      .eq('user_id', currentUser.id)
      .order('date', { ascending: true });

    if (hwRecords && hwRecords.length > 0) {
      const localRecords = hwRecords.map(r => ({
        date: r.date,
        height: parseFloat(r.height),
        weight: parseFloat(r.weight),
        head: r.head ? parseFloat(r.head) : null
      }));
      localStorage.setItem('parenting_height_weight', JSON.stringify(localRecords));
    }

    // 加载观察手记
    const { data: obsNotes } = await supabaseClient
      .from('observation_notes')
      .select('*')
      .eq('user_id', currentUser.id)
      .order('date', { ascending: false });

    if (obsNotes && obsNotes.length > 0) {
      const localNotes = obsNotes.map(n => ({
        date: n.date,
        title: n.title,
        content: n.content,
        category: n.category
      }));
      localStorage.setItem('parenting_observations', JSON.stringify(localNotes));
    }

    // 加载喂养记录
    const { data: feedRecords } = await supabaseClient
      .from('feeding_records')
      .select('*')
      .eq('user_id', currentUser.id)
      .order('date', { ascending: false });

    if (feedRecords && feedRecords.length > 0) {
      const localFeeds = feedRecords.map(f => ({
        date: f.date,
        time: f.time,
        type: f.type,
        amount: f.amount ? parseFloat(f.amount) : null,
        duration: f.duration,
        note: f.note
      }));
      localStorage.setItem('parenting_feeding_records', JSON.stringify(localFeeds));
    }

    // 加载睡眠记录
    const { data: sleepRecs } = await supabaseClient
      .from('sleep_records')
      .select('*')
      .eq('user_id', currentUser.id)
      .order('date', { ascending: false });

    if (sleepRecs && sleepRecs.length > 0) {
      const localSleeps = sleepRecs.map(s => ({
        date: s.date,
        start_time: s.start_time,
        end_time: s.end_time,
        quality: s.quality,
        note: s.note
      }));
      localStorage.setItem('parenting_sleep_records', JSON.stringify(localSleeps));
    }

    console.log('✅ 数据从 Supabase 同步完成');
  } catch (err) {
    console.error('❌ 同步数据失败:', err);
  }
}

// ===== 保存身高体重记录到 Supabase =====
async function saveHeightWeightToSupabase(record) {
  if (!supabaseClient || !currentUser) return;
  try {
    await supabaseClient.from('height_weight_records').insert({
      user_id: currentUser.id,
      date: record.date,
      height: record.height,
      weight: record.weight,
      head: record.head || null
    });
  } catch (err) {
    console.error('保存身高体重到 Supabase 失败:', err);
  }
}

// ===== 删除身高体重记录 =====
async function deleteHeightWeightFromSupabase(dateStr) {
  if (!supabaseClient || !currentUser) return;
  try {
    await supabaseClient
      .from('height_weight_records')
      .delete()
      .eq('user_id', currentUser.id)
      .eq('date', dateStr);
  } catch (err) {
    console.error('删除 Supabase 记录失败:', err);
  }
}

// ===== 保存观察手记到 Supabase =====
async function saveObservationToSupabase(note) {
  if (!supabaseClient || !currentUser) return;
  try {
    await supabaseClient.from('observation_notes').insert({
      user_id: currentUser.id,
      date: note.date,
      title: note.title,
      content: note.content || '',
      category: note.category || 'other'
    });
  } catch (err) {
    console.error('保存观察手记到 Supabase 失败:', err);
  }
}

// ===== 保存喂养记录到 Supabase =====
async function saveFeedingToSupabase(record) {
  if (!supabaseClient || !currentUser) return;
  try {
    await supabaseClient.from('feeding_records').insert({
      user_id: currentUser.id,
      date: record.date,
      time: record.time,
      type: record.type,
      amount: record.amount || null,
      duration: record.duration || null,
      note: record.note || ''
    });
  } catch (err) {
    console.error('保存喂养记录到 Supabase 失败:', err);
  }
}

// ===== 保存睡眠记录到 Supabase =====
async function saveSleepToSupabase(record) {
  if (!supabaseClient || !currentUser) return;
  try {
    await supabaseClient.from('sleep_records').insert({
      user_id: currentUser.id,
      date: record.date,
      start_time: record.start_time,
      end_time: record.end_time,
      quality: record.quality || 'normal',
      note: record.note || ''
    });
  } catch (err) {
    console.error('保存睡眠记录到 Supabase 失败:', err);
  }
}

// ===== 上传本地数据到 Supabase（首次登录迁移） =====
async function migrateLocalDataToSupabase() {
  if (!supabaseClient || !currentUser) return;

  try {
    // 迁移身高体重
    const hwData = JSON.parse(localStorage.getItem('parenting_height_weight') || '[]');
    if (hwData.length > 0) {
      const hwInserts = hwData.map(r => ({
        user_id: currentUser.id,
        date: r.date,
        height: r.height,
        weight: r.weight,
        head: r.head || null
      }));
      await supabaseClient.from('height_weight_records').upsert(hwInserts, { onConflict: 'user_id,date' });
    }

    // 迁移观察手记
    const obsData = JSON.parse(localStorage.getItem('parenting_observations') || '[]');
    if (obsData.length > 0) {
      const obsInserts = obsData.map(n => ({
        user_id: currentUser.id,
        date: n.date,
        title: n.title,
        content: n.content || '',
        category: n.category || 'other'
      }));
      await supabaseClient.from('observation_notes').insert(obsInserts);
    }

    // 迁移喂养记录
    const feedData = JSON.parse(localStorage.getItem('parenting_feeding_records') || '[]');
    if (feedData.length > 0) {
      const feedInserts = feedData.map(f => ({
        user_id: currentUser.id,
        date: f.date,
        time: f.time,
        type: f.type,
        amount: f.amount || null,
        duration: f.duration || null,
        note: f.note || ''
      }));
      await supabaseClient.from('feeding_records').insert(feedInserts);
    }

    // 迁移睡眠记录
    const sleepData = JSON.parse(localStorage.getItem('parenting_sleep_records') || '[]');
    if (sleepData.length > 0) {
      const sleepInserts = sleepData.map(s => ({
        user_id: currentUser.id,
        date: s.date,
        start_time: s.start_time,
        end_time: s.end_time,
        quality: s.quality || 'normal',
        note: s.note || ''
      }));
      await supabaseClient.from('sleep_records').insert(sleepInserts);
    }

    // 迁移用户设置
    const birthDate = localStorage.getItem('parenting_birth_date');
    const gender = localStorage.getItem('parenting_gender');
    const babyName = localStorage.getItem('parenting_baby_name');

    if (birthDate || gender || babyName) {
      await supabaseClient.from('profiles').update({
        birth_date: birthDate || null,
        gender: gender || 'boy',
        baby_name: babyName || null,
        updated_at: new Date().toISOString()
      }).eq('id', currentUser.id);
    }

    console.log('✅ 本地数据已迁移到 Supabase');
    return { success: true };
  } catch (err) {
    console.error('❌ 迁移数据失败:', err);
    return { error: err.message };
  }
}

// ===== 保存用户设置到 Supabase =====
async function saveProfileToSupabase(updates) {
  if (!supabaseClient || !currentUser) return;
  try {
    await supabaseClient.from('profiles').update({
      ...updates,
      updated_at: new Date().toISOString()
    }).eq('id', currentUser.id);
  } catch (err) {
    console.error('保存用户设置失败:', err);
  }
}

// ===== 检查是否已登录 =====
function isUserLoggedIn() {
  return currentUser !== null;
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
  initSupabase();
});

// ===== 认证弹窗交互函数 =====

let isSignUpMode = false;

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.style.display = 'flex';
    resetAuthForm();
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'none';
  resetAuthForm();
}

function resetAuthForm() {
  isSignUpMode = false;
  const title = document.getElementById('auth-modal-title');
  const submitBtn = document.getElementById('auth-submit-btn');
  const switchText = document.getElementById('auth-switch-text');
  const switchBtn = document.getElementById('auth-switch-btn');
  const messageEl = document.getElementById('auth-message');
  const migrateEl = document.getElementById('migrate-prompt');

  if (title) title.textContent = '登录';
  if (submitBtn) submitBtn.textContent = '登录';
  if (switchText) switchText.textContent = '还没有账号？';
  if (switchBtn) switchBtn.textContent = '注册新账号';
  if (messageEl) { messageEl.style.display = 'none'; messageEl.className = 'auth-message'; }
  if (migrateEl) migrateEl.style.display = 'none';

  const form = document.getElementById('auth-form');
  if (form) form.reset();
}

function toggleAuthMode() {
  isSignUpMode = !isSignUpMode;
  const title = document.getElementById('auth-modal-title');
  const submitBtn = document.getElementById('auth-submit-btn');
  const switchText = document.getElementById('auth-switch-text');
  const switchBtn = document.getElementById('auth-switch-btn');

  if (isSignUpMode) {
    if (title) title.textContent = '注册新账号';
    if (submitBtn) submitBtn.textContent = '注册';
    if (switchText) switchText.textContent = '已有账号？';
    if (switchBtn) switchBtn.textContent = '去登录';
  } else {
    if (title) title.textContent = '登录';
    if (submitBtn) submitBtn.textContent = '登录';
    if (switchText) switchText.textContent = '还没有账号？';
    if (switchBtn) switchBtn.textContent = '注册新账号';
  }
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const messageEl = document.getElementById('auth-message');
  const submitBtn = document.getElementById('auth-submit-btn');

  if (!email || !password) {
    showAuthMessage('请填写邮箱和密码', 'error');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = isSignUpMode ? '注册中...' : '登录中...';

  let result;
  if (isSignUpMode) {
    result = await signUp(email, password);
  } else {
    result = await signIn(email, password);
  }

  submitBtn.disabled = false;
  submitBtn.textContent = isSignUpMode ? '注册' : '登录';

  if (result.error) {
    let errorMsg = result.error;
    if (errorMsg.includes('Invalid login credentials')) {
      errorMsg = '邮箱或密码不正确';
    } else if (errorMsg.includes('User already registered')) {
      errorMsg = '该邮箱已注册，请直接登录';
    } else if (errorMsg.includes('Password should be')) {
      errorMsg = '密码至少6位';
    } else if (errorMsg.includes('Email not confirmed')) {
      errorMsg = '请先验证邮箱后再登录';
    }
    showAuthMessage(errorMsg, 'error');
    return;
  }

  if (result.needConfirm) {
    showAuthMessage(result.message, 'info');
    return;
  }

  if (result.success) {
    showAuthMessage(isSignUpMode ? '注册成功！' : '登录成功！', 'success');
    closeAuthModal();

    if (hasLocalData()) {
      showMigratePrompt();
    }
  }
}

function showAuthMessage(text, type) {
  const el = document.getElementById('auth-message');
  if (!el) return;
  el.textContent = text;
  el.className = 'auth-message ' + type;
  el.style.display = 'block';
}

function hasLocalData() {
  const keys = ['parenting_height_weight', 'parenting_observation', 'parenting_feeding', 'parenting_sleep'];
  return keys.some(k => {
    const data = localStorage.getItem(k);
    return data && JSON.parse(data).length > 0;
  });
}

function showMigratePrompt() {
  const modal = document.getElementById('auth-modal');
  const formContainer = document.getElementById('auth-form-container');
  const migrateEl = document.getElementById('migrate-prompt');

  if (modal && formContainer && migrateEl) {
    modal.style.display = 'flex';
    formContainer.style.display = 'none';
    migrateEl.style.display = 'block';
  }
}

async function handleMigrate(doMigrate) {
  const modal = document.getElementById('auth-modal');
  if (doMigrate) {
    const result = await migrateLocalDataToSupabase();
    if (result && result.success) {
      if (typeof showToast === 'function') showToast('数据已上传到云端！');
    } else {
      if (typeof showToast === 'function') showToast('数据上传失败，请稍后重试');
    }
  }
  closeAuthModal();
}

document.addEventListener('click', function(e) {
  const modal = document.getElementById('auth-modal');
  if (e.target === modal) {
    closeAuthModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeAuthModal();
  }
});
