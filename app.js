// ===== 育儿指南网站应用逻辑 v5 - 包含宝宝资料功能 =====

document.addEventListener('DOMContentLoaded', function() {
    // 状态管理
    let currentAge = null;
    let currentChannel = 'feeding';
    let currentMilestoneTab = 'record';
    let currentObservationTab = 'timeline';
    let currentFeedingRecordTab = 'record';
    let currentSleepLogTab = 'record';
    let currentDataManageTab = 'export';
    let currentBabyProfileTab = 'list';
    
    // 宝宝相关状态
    let currentBaby = null;
    let babiesList = [];
    
    // DOM元素
    const homePage = document.getElementById('home-page');
    const contentPage = document.getElementById('content-page');
    const milestonePage = document.getElementById('milestone-page');
    const observationPage = document.getElementById('observation-page');
    const feedingRecordPage = document.getElementById('feeding-record-page');
    const sleepLogPage = document.getElementById('sleep-log-page');
    const dataManagePage = document.getElementById('data-manage-page');
    const babyProfilePage = document.getElementById('baby-profile-page');
    const backBtn = document.getElementById('back-btn');
    const backFromMilestone = document.getElementById('back-from-milestone');
    const backFromObservation = document.getElementById('back-from-observation');
    const backFromFeedingRecord = document.getElementById('back-from-feeding-record');
    const backFromSleepLog = document.getElementById('back-from-sleep-log');
    const backFromDataManage = document.getElementById('back-from-data-manage');
    const backFromBabyProfile = document.getElementById('back-from-baby');
    const currentAgeTitle = document.getElementById('current-age-title');
    const contentArea = document.getElementById('content-area');
    const milestoneContent = document.getElementById('milestone-content');
    const observationContent = document.getElementById('observation-content');
    const feedingRecordContent = document.getElementById('feeding-record-content');
    const sleepLogContent = document.getElementById('sleep-log-content');
    const dataManageContent = document.getElementById('data-manage-content');
    const babyProfileContent = document.getElementById('baby-profile-content');
    const ageCards = document.querySelectorAll('.age-card');
    const channelCards = document.querySelectorAll('.channel-card');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // 功能入口
    const goMilestone = document.getElementById('go-milestone');
    const goObservation = document.getElementById('go-observation');
    const goFeedingRecord = document.getElementById('go-feeding-record');
    const goSleepLog = document.getElementById('go-sleep-log');
    const goDataManage = document.getElementById('go-data-manage');
    const goBabyProfile = document.getElementById('go-baby-profile');
    
    // 月龄标题映射
    const ageTitles = {
        '0-1m': '0-1月龄',
        '1-3m': '1-3月龄',
        '3-6m': '3-6月龄',
        '6-12m': '6-12月龄',
        '1-2y': '1-2岁',
        '2-3y': '2-3岁'
    };
    
    // 频道标题映射
    const channelTitles = {
        'feeding': '🍼 喂养频道',
        'health': '💊 健康频道',
        'education': '📖 早教频道',
        'care': '🛁 护理频道'
    };

    // 喂养类型映射
    const feedingTypes = {
        breast: { name: '母乳', icon: '🤱' },
        formula: { name: '配方奶', icon: '🍼' },
        solid: { name: '辅食', icon: '🥄' },
        water: { name: '水', icon: '💧' }
    };

    // 睡眠质量映射
    const sleepQualities = {
        good: { name: '睡得好', icon: '😊' },
        normal: { name: '一般', icon: '😐' },
        bad: { name: '睡不好', icon: '😔' }
    };

    // ===== 宝宝资料功能 =====
    
    // 计算月龄
    window.calculateAge = function(birthDate) {
        const birth = new Date(birthDate);
        const now = new Date();
        
        const diffMs = now - birth;
        const totalMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
        
        if (totalMonths < 12) {
            return totalMonths + '个月';
        } else if (totalMonths < 24) {
            const years = 1;
            const months = totalMonths - 12;
            return '1岁' + (months > 0 ? months + '个月' : '');
        } else {
            const years = Math.floor(totalMonths / 12);
            return years + '岁';
        }
    };
    
    // 获取更详细的年龄描述
    window.getAgeString = function(birthDate) {
        const birth = new Date(birthDate);
        const now = new Date();
        
        const diffMs = now - birth;
        const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const totalMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
        
        if (totalDays < 30) {
            return '出生' + totalDays + '天';
        } else if (totalMonths < 12) {
            return totalMonths + '个月零' + (totalDays % 30) + '天';
        } else {
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;
            return years + '岁' + (months > 0 ? months + '个月' : '');
        }
    };
    
    // 从localStorage获取当前宝宝
    function getCurrentBabyFromStorage() {
        const babyId = localStorage.getItem('current_baby_id');
        const babyData = localStorage.getItem('current_baby_data');
        if (babyData) {
            try {
                return JSON.parse(babyData);
            } catch(e) {
                return null;
            }
        }
        return null;
    }
    
    // 保存当前宝宝到localStorage
    function saveCurrentBabyToStorage(baby) {
        if (baby) {
            localStorage.setItem('current_baby_id', baby.id);
            localStorage.setItem('current_baby_data', JSON.stringify(baby));
            // 同时更新旧版兼容字段
            localStorage.setItem('parenting_birth_date', baby.birth_date);
            localStorage.setItem('parenting_gender', baby.gender);
            localStorage.setItem('parenting_baby_name', baby.baby_name);
        } else {
            localStorage.removeItem('current_baby_id');
            localStorage.removeItem('current_baby_data');
        }
    }
    
    // 更新Header显示
    function updateHeaderBabyInfo() {
        const babyNameSpan = document.querySelector('.user-baby-name');
        if (babyNameSpan) {
            if (currentBaby) {
                const ageStr = calculateAge(currentBaby.birth_date);
                babyNameSpan.textContent = currentBaby.baby_name + ' · ' + ageStr;
                babyNameSpan.style.display = 'inline-flex';
            } else {
                babyNameSpan.textContent = '未设置宝宝';
                babyNameSpan.style.display = 'inline-flex';
            }
        }
    }
    
    // 设置当前宝宝
    window.setCurrentBaby = function(baby) {
        currentBaby = baby;
        saveCurrentBabyToStorage(baby);
        updateHeaderBabyInfo();
        // 如果Supabase可用，同步更新is_active状态
        if (typeof supabaseClient !== 'undefined' && supabaseClient && currentUser) {
            setActiveBabyInSupabase(baby.id);
        }
        showToast('已切换到 ' + baby.baby_name);
    };
    
    // 在Supabase中设置活跃宝宝
    async function setActiveBabyInSupabase(babyId) {
        try {
            // 先把所有宝宝的is_active设为false
            await supabaseClient
                .from('babies')
                .update({ is_active: false })
                .eq('user_id', currentUser.id);
            
            // 再把当前宝宝设为true
            await supabaseClient
                .from('babies')
                .update({ is_active: true })
                .eq('id', babyId)
                .eq('user_id', currentUser.id);
        } catch(err) {
            console.error('更新活跃宝宝失败:', err);
        }
    }
    
    // 加载宝宝列表
    window.loadBabies = async function() {
        if (typeof supabaseClient === 'undefined' || !supabaseClient || !currentUser) {
            return [];
        }
        
        try {
            const { data, error } = await supabaseClient
                .from('babies')
                .select('*')
                .eq('user_id', currentUser.id)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            babiesList = data || [];
            
            // 查找当前活跃宝宝
            const activeBaby = babiesList.find(b => b.is_active) || babiesList[0];
            if (activeBaby && !currentBaby) {
                currentBaby = activeBaby;
                saveCurrentBabyToStorage(currentBaby);
                updateHeaderBabyInfo();
            }
            
            return babiesList;
        } catch(err) {
            console.error('加载宝宝列表失败:', err);
            return [];
        }
    };
    
    // 添加宝宝
    window.addBaby = async function(name, gender, birthDate) {
        if (!currentUser) {
            showToast('请先登录');
            return null;
        }
        
        try {
            const { data, error } = await supabaseClient
                .from('babies')
                .insert({
                    user_id: currentUser.id,
                    baby_name: name,
                    gender: gender,
                    birth_date: birthDate,
                    is_active: babiesList.length === 0 // 第一个宝宝自动设为活跃
                })
                .select()
                .single();
            
            if (error) throw error;
            
            babiesList.unshift(data);
            
            // 如果是第一个宝宝，设为当前
            if (babiesList.length === 1 || data.is_active) {
                currentBaby = data;
                saveCurrentBabyToStorage(currentBaby);
                updateHeaderBabyInfo();
            }
            
            return data;
        } catch(err) {
            console.error('添加宝宝失败:', err);
            return null;
        }
    };
    
    // 更新宝宝
    window.updateBaby = async function(id, name, gender, birthDate) {
        if (!currentUser) return null;
        
        try {
            const { data, error } = await supabaseClient
                .from('babies')
                .update({
                    baby_name: name,
                    gender: gender,
                    birth_date: birthDate
                })
                .eq('id', id)
                .eq('user_id', currentUser.id)
                .select()
                .single();
            
            if (error) throw error;
            
            // 更新本地列表
            const index = babiesList.findIndex(b => b.id === id);
            if (index !== -1) {
                babiesList[index] = data;
            }
            
            // 如果更新的是当前宝宝，同步更新
            if (currentBaby && currentBaby.id === id) {
                currentBaby = data;
                saveCurrentBabyToStorage(currentBaby);
                updateHeaderBabyInfo();
            }
            
            return data;
        } catch(err) {
            console.error('更新宝宝失败:', err);
            return null;
        }
    };
    
    // 删除宝宝
    window.deleteBaby = async function(id) {
        if (!currentUser) return false;
        if (!confirm('确定要删除这个宝宝的资料吗？所有相关记录也会被删除。')) return false;
        
        try {
            const { error } = await supabaseClient
                .from('babies')
                .delete()
                .eq('id', id)
                .eq('user_id', currentUser.id);
            
            if (error) throw error;
            
            // 从本地列表移除
            babiesList = babiesList.filter(b => b.id !== id);
            
            // 如果删除的是当前宝宝
            if (currentBaby && currentBaby.id === id) {
                currentBaby = babiesList[0] || null;
                saveCurrentBabyToStorage(currentBaby);
                updateHeaderBabyInfo();
            }
            
            showToast('宝宝已删除');
            return true;
        } catch(err) {
            console.error('删除宝宝失败:', err);
            return false;
        }
    };
    
    // 打开宝宝弹窗
    window.openBabyModal = function(baby = null) {
        const modal = document.getElementById('baby-modal');
        const title = document.getElementById('baby-modal-title');
        const subtitle = document.getElementById('baby-modal-subtitle');
        const form = document.getElementById('baby-form');
        const idInput = document.getElementById('baby-id');
        const nameInput = document.getElementById('baby-name');
        const genderSelect = document.getElementById('baby-gender');
        const dateInput = document.getElementById('baby-birth-date');
        
        if (modal) {
            if (baby) {
                // 编辑模式
                title.textContent = '编辑宝宝';
                subtitle.textContent = '修改宝宝信息';
                idInput.value = baby.id;
                nameInput.value = baby.baby_name;
                genderSelect.value = baby.gender;
                dateInput.value = baby.birth_date;
            } else {
                // 添加模式
                title.textContent = '添加宝宝';
                subtitle.textContent = '记录宝宝信息，获取专属成长建议';
                form.reset();
                idInput.value = '';
            }
            modal.style.display = 'flex';
        }
    };
    
    // 关闭宝宝弹窗
    window.closeBabyModal = function() {
        const modal = document.getElementById('baby-modal');
        if (modal) modal.style.display = 'none';
        const form = document.getElementById('baby-form');
        if (form) form.reset();
    };
    
    // 处理宝宝表单提交
    window.handleBabySubmit = async function(e) {
        e.preventDefault();
        
        const id = document.getElementById('baby-id').value;
        const name = document.getElementById('baby-name').value.trim();
        const gender = document.getElementById('baby-gender').value;
        const birthDate = document.getElementById('baby-birth-date').value;
        const submitBtn = document.getElementById('baby-submit-btn');
        
        if (!name || !birthDate) {
            showToast('请填写完整信息');
            return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = '保存中...';
        
        let result;
        if (id) {
            result = await updateBaby(id, name, gender, birthDate);
        } else {
            result = await addBaby(name, gender, birthDate);
        }
        
        submitBtn.disabled = false;
        submitBtn.textContent = '保存';
        
        if (result) {
            showToast(id ? '宝宝信息已更新' : '宝宝已添加');
            closeBabyModal();
            
            // 如果有宝宝资料页面，更新页面内容
            if (babyProfilePage.classList.contains('active')) {
                loadBabyProfileContent();
            }
        } else {
            showToast('保存失败，请重试');
        }
    };
    
    // 显示宝宝资料页面
    window.showBabyProfilePage = function() {
        hideAllPages();
        homePage.classList.remove('active');
        babyProfilePage.classList.add('active');
        currentBabyProfileTab = 'list';
        loadBabyProfileContent();
    };
    
    // 加载宝宝资料页面内容
    window.loadBabyProfileContent = async function() {
        // 检查登录状态
        if (!currentUser) {
            babyProfileContent.innerHTML = `
                <div class="no-record">
                    <p>请先登录后再管理宝宝资料</p>
                    <button class="btn btn-primary" onclick="openAuthModal()">去登录</button>
                </div>
            `;
            return;
        }
        
        if (currentBabyProfileTab === 'list') {
            await loadBabyList();
        } else if (currentBabyProfileTab === 'add') {
            loadAddBabyForm();
        }
        
        // 更新Tab高亮
        document.querySelectorAll('[data-bptab]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.bptab === currentBabyProfileTab);
        });
    };
    
    // 加载宝宝列表
    async function loadBabyList() {
        await loadBabies();
        
        const genderIcon = { boy: '👦', girl: '👧' };
        
        if (babiesList.length === 0) {
            babyProfileContent.innerHTML = `
                <div class="baby-list-empty">
                    <div class="empty-icon">👶</div>
                    <h3>还没有添加宝宝</h3>
                    <p>点击下方按钮添加宝宝的资料</p>
                    <button class="btn btn-primary" onclick="switchBabyProfileTab('add')">添加宝宝</button>
                </div>
            `;
            return;
        }
        
        let html = `
            <div class="baby-list-header">
                <h2>我的宝宝们</h2>
                <span class="baby-count">共 ${babiesList.length} 个宝宝</span>
            </div>
            
            <div class="baby-cards-grid">
        `;
        
        babiesList.forEach(baby => {
            const ageStr = calculateAge(baby.birth_date);
            const isCurrent = currentBaby && currentBaby.id === baby.id;
            const genderEmoji = baby.gender === 'girl' ? '👧' : '👦';
            
            html += `
                <div class="baby-card ${isCurrent ? 'current' : ''}">
                    ${isCurrent ? '<div class="current-baby-badge">当前宝宝</div>' : ''}
                    <div class="baby-card-header">
                        <div class="baby-avatar">${genderEmoji}</div>
                        <div class="baby-info">
                            <h3 class="baby-name">${baby.baby_name}</h3>
                            <span class="baby-age-tag">${ageStr}</span>
                        </div>
                    </div>
                    <div class="baby-card-body">
                        <div class="baby-detail">
                            <span class="detail-label">性别</span>
                            <span class="detail-value">${baby.gender === 'girl' ? '女宝宝' : '男宝宝'}</span>
                        </div>
                        <div class="baby-detail">
                            <span class="detail-label">出生日期</span>
                            <span class="detail-value">${baby.birth_date}</span>
                        </div>
                        <div class="baby-detail">
                            <span class="detail-label">详细月龄</span>
                            <span class="detail-value">${getAgeString(baby.birth_date)}</span>
                        </div>
                    </div>
                    <div class="baby-card-actions">
                        ${!isCurrent ? `<button class="btn btn-primary btn-sm" onclick="setCurrentBabyFromList('${baby.id}')">设为当前</button>` : ''}
                        <button class="btn btn-secondary btn-sm" onclick="editBabyFromList('${baby.id}')">编辑</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteBabyFromList('${baby.id}')">删除</button>
                    </div>
                </div>
            `;
        });
        
        html += `
            </div>
            <div class="baby-list-footer">
                <button class="btn btn-primary" onclick="switchBabyProfileTab('add')">➕ 添加新宝宝</button>
            </div>
        `;
        
        babyProfileContent.innerHTML = html;
    }
    
    // 加载添加宝宝表单
    function loadAddBabyForm() {
        babyProfileContent.innerHTML = `
            <div class="add-baby-form-container">
                <h2>添加新宝宝</h2>
                <form id="add-baby-form-inline" onsubmit="handleBabySubmitInline(event)">
                    <div class="form-group">
                        <label>宝宝小名</label>
                        <input type="text" id="inline-baby-name" placeholder="如：小豆包" required>
                    </div>
                    <div class="form-group">
                        <label>性别</label>
                        <select id="inline-baby-gender">
                            <option value="boy">👦 男宝宝</option>
                            <option value="girl">👧 女宝宝</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>出生日期</label>
                        <input type="date" id="inline-baby-birth-date" required>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">保存</button>
                        <button type="button" class="btn btn-secondary" onclick="switchBabyProfileTab('list')">取消</button>
                    </div>
                </form>
            </div>
        `;
    }
    
    // 切换宝宝资料Tab
    window.switchBabyProfileTab = function(tab) {
        currentBabyProfileTab = tab;
        loadBabyProfileContent();
    };
    
    // 从列表编辑宝宝
    window.editBabyFromList = function(id) {
        const baby = babiesList.find(b => b.id === id);
        if (baby) {
            openBabyModal(baby);
        }
    };
    
    // 从列表删除宝宝
    window.deleteBabyFromList = async function(id) {
        const baby = babiesList.find(b => b.id === id);
        if (baby) {
            if (confirm(`确定要删除「${baby.baby_name}」的资料吗？`)) {
                await deleteBaby(id);
                loadBabyProfileContent();
            }
        }
    };
    
    // 从列表设置当前宝宝
    window.setCurrentBabyFromList = function(id) {
        const baby = babiesList.find(b => b.id === id);
        if (baby) {
            setCurrentBaby(baby);
            loadBabyProfileContent();
        }
    };
    
    // 处理内联表单提交
    window.handleBabySubmitInline = async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('inline-baby-name').value.trim();
        const gender = document.getElementById('inline-baby-gender').value;
        const birthDate = document.getElementById('inline-baby-birth-date').value;
        
        if (!name || !birthDate) {
            showToast('请填写完整信息');
            return;
        }
        
        const result = await addBaby(name, gender, birthDate);
        if (result) {
            showToast('宝宝已添加');
            currentBabyProfileTab = 'list';
            loadBabyProfileContent();
        } else {
            showToast('添加失败，请重试');
        }
    };
    
    // ===== 页面切换 =====
    function hideAllPages() {
        [contentPage, milestonePage, observationPage, feedingRecordPage, sleepLogPage, dataManagePage, babyProfilePage].forEach(p => p.classList.remove('active'));
    }

    function showHomePage() {
        hideAllPages();
        homePage.classList.add('active');
        currentAge = null;
        currentChannel = 'feeding';
        updateTabActive();
    }
    
    function showContentPage(age, channel) {
        hideAllPages();
        homePage.classList.remove('active');
        contentPage.classList.add('active');
        currentAge = age;
        currentChannel = channel;
        currentAgeTitle.textContent = ageTitles[age];
        updateTabActive();
        loadContent();
    }
    
    function showMilestonePage() {
        hideAllPages();
        homePage.classList.remove('active');
        milestonePage.classList.add('active');
        loadMilestoneContent();
    }
    
    function showObservationPage() {
        hideAllPages();
        homePage.classList.remove('active');
        observationPage.classList.add('active');
        loadObservationContent();
    }

    function showFeedingRecordPage() {
        hideAllPages();
        homePage.classList.remove('active');
        feedingRecordPage.classList.add('active');
        loadFeedingRecordContent();
    }

    function showSleepLogPage() {
        hideAllPages();
        homePage.classList.remove('active');
        sleepLogPage.classList.add('active');
        loadSleepLogContent();
    }

    function showDataManagePage() {
        hideAllPages();
        homePage.classList.remove('active');
        dataManagePage.classList.add('active');
        loadDataManageContent();
    }
    
    // ===== Tab切换 =====
    function updateTabActive() {
        tabBtns.forEach(btn => {
            if (btn.dataset.channel === currentChannel) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // ===== 加载内容 =====
    function loadContent() {
        if (!currentAge || !currentChannel) return;
        
        const data = window.contentData[currentChannel][currentAge];
        if (!data) return;
        
        let html = `
            <div class="content-header">
                <h2>${ageTitles[currentAge]} · 成长指南</h2>
                <span class="channel-badge">${channelTitles[currentChannel]}</span>
            </div>
        `;
        
        data.cards.forEach(card => {
            html += `
                <div class="content-card" data-id="${card.id}">
                    <div class="content-card-header">
                        <h3>${card.icon ? card.icon + ' ' : ''}${card.title}</h3>
                        <span class="toggle-icon">▼</span>
                    </div>
                    <div class="content-card-body">
                        ${card.content}
                    </div>
                </div>
            `;
        });
        
        contentArea.innerHTML = html;
        
        document.querySelectorAll('.content-card-header').forEach(header => {
            header.addEventListener('click', function() {
                const card = this.parentElement;
                card.classList.toggle('expanded');
            });
        });
        
        const firstCard = document.querySelector('.content-card');
        if (firstCard) {
            firstCard.classList.add('expanded');
        }
    }
    
    // ===== 发育里程碑页面内容 =====
    function loadMilestoneContent() {
        if (currentMilestoneTab === 'record') {
            loadMilestoneRecord();
        } else if (currentMilestoneTab === 'chart') {
            loadMilestoneChart();
        }
        
        document.querySelectorAll('[data-mtab]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mtab === currentMilestoneTab);
        });
    }
    
    function loadMilestoneRecord() {
        const records = JSON.parse(localStorage.getItem('parenting_height_weight') || '[]');
        const gender = currentBaby?.gender || localStorage.getItem('parenting_gender') || 'boy';
        
        milestoneContent.innerHTML = `
            <div class="milestone-header">
                <h2>📊 身高体重记录</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
                <div class="gender-toggle">
                    <button class="gender-btn ${gender === 'boy' ? 'active' : ''}" data-gender="boy">👦 男宝宝</button>
                    <button class="gender-btn ${gender === 'girl' ? 'active' : ''}" data-gender="girl">👧 女宝宝</button>
                </div>
            </div>
            
            <div class="record-form">
                <h3 class="form-title">✏️ 添加新记录</h3>
                <form id="record-form">
                    <div class="form-group">
                        <label>测量日期</label>
                        <input type="date" id="record-date" required value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>身高 (cm)</label>
                            <input type="number" id="record-height" step="0.1" min="30" max="120" placeholder="如：65.5" required>
                        </div>
                        <div class="form-group">
                            <label>体重 (kg)</label>
                            <input type="number" id="record-weight" step="0.1" min="2" max="30" placeholder="如：7.5" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>头围 (cm，可选)</label>
                        <input type="number" id="record-head" step="0.1" min="25" max="60" placeholder="如：42">
                    </div>
                    <button type="submit" class="btn btn-primary">保存记录</button>
                </form>
            </div>
            
            <div class="record-list">
                <h3>📋 历史记录</h3>
                ${records.length > 0 ? records.map((r, i) => `
                    <div class="record-item">
                        <div class="record-info">
                            <span class="date">${r.date}</span>
                            <span>身高: <strong>${r.height} cm</strong></span>
                            <span>体重: <strong>${r.weight} kg</strong></span>
                            ${r.head ? `<span>头围: ${r.head} cm</span>` : ''}
                        </div>
                        <div class="record-actions">
                            <button class="edit-btn" onclick="editRecord(${i})">编辑</button>
                            <button class="delete-btn" onclick="deleteRecord(${i})">删除</button>
                        </div>
                    </div>
                `).join('') : '<div class="no-record">暂无记录，点击上方表单添加第一条记录吧~</div>'}
            </div>
            
            <div class="milestone-info">
                <h4>💡 参考标准（WHO 0-3岁）</h4>
                <ul>
                    <li>男宝宝1岁平均身高约75.7cm，体重约9.6kg</li>
                    <li>女宝宝1岁平均身高约74.0cm，体重约9.0kg</li>
                    <li>0-3个月身高每月增长约3-4cm</li>
                    <li>体重前3个月每月增长约700-1000g</li>
                </ul>
            </div>
        `;
        
        document.getElementById('record-form').addEventListener('submit', saveRecord);
        
        document.querySelectorAll('.gender-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (currentBaby) {
                    // 如果有当前宝宝，不允许切换性别
                    showToast('宝宝的性别已在宝宝资料中设置');
                    return;
                }
                localStorage.setItem('parenting_gender', this.dataset.gender);
                loadMilestoneRecord();
            });
        });
    }
    
    function loadMilestoneChart() {
        const gender = currentBaby?.gender || localStorage.getItem('parenting_gender') || 'boy';
        const chartType = localStorage.getItem('parenting_chart_type') || 'height';
        const records = JSON.parse(localStorage.getItem('parenting_height_weight') || '[]');
        
        milestoneContent.innerHTML = `
            <div class="milestone-header">
                <h2>📈 生长曲线</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
                <div class="gender-toggle">
                    <button class="gender-btn ${gender === 'boy' ? 'active' : ''}" data-gender="boy">👦 男宝宝</button>
                    <button class="gender-btn ${gender === 'girl' ? 'active' : ''}" data-gender="girl">👧 女宝宝</button>
                </div>
                <div class="chart-type-toggle">
                    <button class="chart-type-btn ${chartType === 'height' ? 'active' : ''}" data-type="height">身高曲线</button>
                    <button class="chart-type-btn ${chartType === 'weight' ? 'active' : ''}" data-type="weight">体重曲线</button>
                </div>
            </div>
            
            <div class="chart-container">
                <div id="growth-chart" class="chart-wrapper"></div>
            </div>
            
            <div class="milestone-info">
                <h4>📊 如何解读生长曲线</h4>
                <ul>
                    <li>曲线上的线条代表WHO标准百分位（3rd、15th、50th、85th、97th）</li>
                    <li>您的宝宝数据点越接近50th曲线，表示发育越接近平均水平</li>
                    <li>持续低于3rd或高于97th曲线建议咨询医生</li>
                    <li>比起单次测量，连续监测曲线走势更重要</li>
                </ul>
            </div>
        `;
        
        document.querySelectorAll('.gender-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (currentBaby) {
                    showToast('宝宝的性别已在宝宝资料中设置');
                    return;
                }
                localStorage.setItem('parenting_gender', this.dataset.gender);
                loadMilestoneChart();
            });
        });
        
        document.querySelectorAll('.chart-type-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                localStorage.setItem('parenting_chart_type', this.dataset.type);
                loadMilestoneChart();
            });
        });
        
        setTimeout(() => {
            initGrowthChart(gender, chartType, records);
        }, 100);
    }
    
    // ===== 观察手记页面内容 =====
    function loadObservationContent() {
        if (currentObservationTab === 'timeline') {
            loadObservationTimeline();
        } else if (currentObservationTab === 'add') {
            loadAddObservation();
        }
        
        document.querySelectorAll('[data-otab]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.otab === currentObservationTab);
        });
    }
    
    function loadObservationTimeline() {
        const records = JSON.parse(localStorage.getItem('parenting_observation') || '[]');
        const filter = localStorage.getItem('parenting_observation_filter') || 'all';
        
        const filteredRecords = filter === 'all' ? records : records.filter(r => r.category === filter);
        const sortedRecords = filteredRecords.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        const categoryInfo = {
            motor: { name: '大动作', icon: '🏃' },
            sensory: { name: '精细动作', icon: '👋' },
            language: { name: '语言', icon: '💬' },
            social: { name: '社交情感', icon: '😊' }
        };
        
        milestoneContent.innerHTML = '';
        observationContent.innerHTML = `
            <div class="milestone-header">
                <h2>📅 成长时间线</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
            </div>
            
            <div class="category-filter">
                <button class="filter-btn ${filter === 'all' ? 'active' : ''}" data-filter="all">全部</button>
                <button class="filter-btn ${filter === 'motor' ? 'active' : ''}" data-filter="motor">🏃 大动作</button>
                <button class="filter-btn ${filter === 'sensory' ? 'active' : ''}" data-filter="sensory">👋 精细动作</button>
                <button class="filter-btn ${filter === 'language' ? 'active' : ''}" data-filter="language">💬 语言</button>
                <button class="filter-btn ${filter === 'social' ? 'active' : ''}" data-filter="social">😊 社交情感</button>
            </div>
            
            ${sortedRecords.length > 0 ? `
                <div class="observation-timeline">
                    ${sortedRecords.map((r, i) => `
                        <div class="observation-item ${r.category}">
                            <div class="observation-header">
                                <span class="observation-category">
                                    ${categoryInfo[r.category]?.icon || '📝'} ${categoryInfo[r.category]?.name || r.category}
                                </span>
                                <span class="observation-date">${r.date}</span>
                            </div>
                            <h4 class="observation-title">${r.title}</h4>
                            <p class="observation-desc">${r.description}</p>
                            <div class="observation-actions">
                                <button class="edit-btn" onclick="editObservation(${i})">编辑</button>
                                <button class="delete-btn" onclick="deleteObservation(${i})">删除</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="no-record">
                    <p>暂无观察记录</p>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem;">点击上方「添加记录」开始记录宝宝的成长瞬间~</p>
                </div>
            `}
            
            <div class="milestone-info">
                <h4>💡 里程碑参考</h4>
                <ul>
                    <li><strong>1-2月</strong>：俯卧抬头、追视人脸、发出咕咕声</li>
                    <li><strong>3-4月</strong>：竖头稳、翻身、笑出声、认妈妈</li>
                    <li><strong>5-6月</strong>：独坐片刻、伸手抓物、咿呀学语</li>
                    <li><strong>7-9月</strong>：爬行、扶站、叫爸爸妈妈</li>
                    <li><strong>10-12月</strong>：独站、扶走、理解简单指令</li>
                    <li><strong>1-2岁</strong>：独立行走、说单词、搭积木</li>
                    <li><strong>2-3岁</strong>：跑跳、说短句、社交游戏</li>
                </ul>
            </div>
        `;
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                localStorage.setItem('parenting_observation_filter', this.dataset.filter);
                loadObservationTimeline();
            });
        });
    }
    
    function loadAddObservation(isEdit = false, editIndex = null) {
        const categoryInfo = {
            motor: { name: '大动作', icon: '🏃' },
            sensory: { name: '精细动作', icon: '👋' },
            language: { name: '语言', icon: '💬' },
            social: { name: '社交情感', icon: '😊' }
        };
        
        let editData = {};
        if (isEdit && editIndex !== null) {
            const records = JSON.parse(localStorage.getItem('parenting_observation') || '[]');
            editData = records[editIndex] || {};
        }
        
        milestoneContent.innerHTML = '';
        observationContent.innerHTML = `
            <div class="milestone-header">
                <h2>${isEdit ? '✏️ 编辑记录' : '➕ 添加新记录'}</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
            </div>
            
            <div class="add-observation-form">
                <form id="observation-form">
                    ${isEdit ? `<input type="hidden" id="edit-index" value="${editIndex}">` : ''}
                    
                    <div class="form-section">
                        <h4>选择类别</h4>
                        <div class="category-options">
                            <div class="category-option ${editData.category === 'motor' ? 'selected' : ''}" data-category="motor">
                                <div class="cat-icon">🏃</div>
                                <div class="cat-name">大动作</div>
                            </div>
                            <div class="category-option ${editData.category === 'sensory' ? 'selected' : ''}" data-category="sensory">
                                <div class="cat-icon">👋</div>
                                <div class="cat-name">精细动作</div>
                            </div>
                            <div class="category-option ${editData.category === 'language' ? 'selected' : ''}" data-category="language">
                                <div class="cat-icon">💬</div>
                                <div class="cat-name">语言</div>
                            </div>
                            <div class="category-option ${editData.category === 'social' ? 'selected' : ''}" data-category="social">
                                <div class="cat-icon">😊</div>
                                <div class="cat-name">社交情感</div>
                            </div>
                        </div>
                        <input type="hidden" id="obs-category" value="${editData.category || 'motor'}">
                    </div>
                    
                    <div class="form-section">
                        <h4>记录信息</h4>
                        <div class="form-group">
                            <label>发生日期</label>
                            <input type="date" id="obs-date" required value="${editData.date || new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="form-group">
                            <label>里程碑标题</label>
                            <input type="text" id="obs-title" required placeholder="如：第一次翻身、叫妈妈" value="${editData.title || ''}">
                        </div>
                        <div class="form-group">
                            <label>详细描述</label>
                            <textarea id="obs-desc" class="form-textarea" placeholder="记录当时的情景、宝宝的表现等...">${editData.description || ''}</textarea>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">${isEdit ? '保存修改' : '保存记录'}</button>
                    ${isEdit ? '<button type="button" class="btn btn-secondary" onclick="showObservationPage()">取消</button>' : ''}
                </form>
            </div>
        `;
        
        document.querySelectorAll('.category-option').forEach(opt => {
            opt.addEventListener('click', function() {
                document.querySelectorAll('.category-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                document.getElementById('obs-category').value = this.dataset.category;
            });
        });
        
        document.getElementById('observation-form').addEventListener('submit', saveObservation);
    }

    // ===== 喂养记录页面内容 =====
    function loadFeedingRecordContent() {
        if (currentFeedingRecordTab === 'record') {
            loadFeedingRecordForm();
        } else if (currentFeedingRecordTab === 'stats') {
            loadFeedingStats();
        }

        document.querySelectorAll('[data-frtab]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.frtab === currentFeedingRecordTab);
        });
    }

    function loadFeedingRecordForm() {
        const records = JSON.parse(localStorage.getItem('parenting_feeding') || '[]');
        const today = new Date().toISOString().split('T')[0];
        const todayRecords = records.filter(r => r.date === today);
        const now = new Date();
        const timeNow = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');

        feedingRecordContent.innerHTML = `
            <div class="milestone-header">
                <h2>🍼 喂养记录</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
            </div>

            <div class="record-form">
                <h3 class="form-title">✏️ 记录一次喂养</h3>
                <form id="feeding-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label>日期</label>
                            <input type="date" id="fr-date" required value="${today}">
                        </div>
                        <div class="form-group">
                            <label>时间</label>
                            <input type="time" id="fr-time" required value="${timeNow}">
                        </div>
                    </div>

                    <div class="form-section">
                        <h4>喂养类型</h4>
                        <div class="category-options">
                            <div class="category-option selected" data-fdtype="breast">
                                <div class="cat-icon">🤱</div>
                                <div class="cat-name">母乳</div>
                            </div>
                            <div class="category-option" data-fdtype="formula">
                                <div class="cat-icon">🍼</div>
                                <div class="cat-name">配方奶</div>
                            </div>
                            <div class="category-option" data-fdtype="solid">
                                <div class="cat-icon">🥄</div>
                                <div class="cat-name">辅食</div>
                            </div>
                            <div class="category-option" data-fdtype="water">
                                <div class="cat-icon">💧</div>
                                <div class="cat-name">水</div>
                            </div>
                        </div>
                        <input type="hidden" id="fr-type" value="breast">
                    </div>

                    <div class="form-section">
                        <h4>详细信息</h4>
                        <div class="form-row" id="breast-fields">
                            <div class="form-group">
                                <label>喂养时长 (分钟)</label>
                                <input type="number" id="fr-duration" min="1" max="120" placeholder="如：15">
                            </div>
                            <div class="form-group">
                                <label>喂养侧</label>
                                <select id="fr-side">
                                    <option value="left">左侧</option>
                                    <option value="right">右侧</option>
                                    <option value="both">双边</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row" id="bottle-fields" style="display:none">
                            <div class="form-group">
                                <label>奶量 (ml)</label>
                                <input type="number" id="fr-amount" min="1" max="500" placeholder="如：120">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>备注</label>
                            <input type="text" id="fr-note" placeholder="如：宝宝吃得很香">
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">保存记录</button>
                </form>
            </div>

            <div class="record-list">
                <h3>📋 今日喂养 (${todayRecords.length}次)</h3>
                ${todayRecords.length > 0 ? todayRecords.map((r, i) => `
                    <div class="record-item">
                        <div class="record-info">
                            <span class="time">${r.time}</span>
                            <span>${feedingTypes[r.type]?.icon || ''} ${feedingTypes[r.type]?.name || r.type}</span>
                            ${r.duration ? `<span>${r.duration}分钟</span>` : ''}
                            ${r.amount ? `<span>${r.amount}ml</span>` : ''}
                            ${r.side ? `<span>${r.side === 'left' ? '左侧' : r.side === 'right' ? '右侧' : '双边'}</span>` : ''}
                            ${r.note ? `<span class="note">${r.note}</span>` : ''}
                        </div>
                        <div class="record-actions">
                            <button class="delete-btn" onclick="deleteFeedingRecord(${records.indexOf(r)})">删除</button>
                        </div>
                    </div>
                `).join('') : '<div class="no-record">今日暂无喂养记录</div>'}
            </div>
        `;

        // 类型切换
        document.querySelectorAll('[data-fdtype]').forEach(opt => {
            opt.addEventListener('click', function() {
                document.querySelectorAll('[data-fdtype]').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                const type = this.dataset.fdtype;
                document.getElementById('fr-type').value = type;
                
                if (type === 'breast') {
                    document.getElementById('breast-fields').style.display = 'grid';
                    document.getElementById('bottle-fields').style.display = 'none';
                } else {
                    document.getElementById('breast-fields').style.display = 'none';
                    document.getElementById('bottle-fields').style.display = 'grid';
                }
            });
        });

        document.getElementById('feeding-form').addEventListener('submit', saveFeedingRecord);
    }

    function loadFeedingStats() {
        const records = JSON.parse(localStorage.getItem('parenting_feeding') || '[]');
        const today = new Date().toISOString().split('T')[0];
        const todayRecords = records.filter(r => r.date === today);
        
        const breastCount = todayRecords.filter(r => r.type === 'breast').length;
        const formulaTotal = todayRecords.filter(r => r.type === 'formula').reduce((sum, r) => sum + (r.amount || 0), 0);
        const solidCount = todayRecords.filter(r => r.type === 'solid').length;
        
        // 最近7天统计
        const last7Days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const dayRecords = records.filter(r => r.date === dateStr);
            last7Days.push({
                date: dateStr,
                day: d.getDay(),
                count: dayRecords.length,
                breast: dayRecords.filter(r => r.type === 'breast').length,
                formula: dayRecords.filter(r => r.type === 'formula').length,
                solid: dayRecords.filter(r => r.type === 'solid').length
            });
        }
        
        const dayNames = ['日', '一', '二', '三', '四', '五', '六'];

        feedingRecordContent.innerHTML = `
            <div class="milestone-header">
                <h2>📊 喂养统计</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
            </div>

            <div class="stats-grid">
                <div class="stats-card">
                    <div class="stats-value">${breastCount}</div>
                    <div class="stats-label">今日母乳</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${formulaTotal}</div>
                    <div class="stats-label">今日配方奶 (ml)</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${solidCount}</div>
                    <div class="stats-label">今日辅食</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${records.length}</div>
                    <div class="stats-label">总记录数</div>
                </div>
            </div>

            <div class="chart-container">
                <h3>近7天喂养次数</h3>
                <div id="feeding-chart" class="chart-wrapper"></div>
            </div>

            <div class="milestone-info">
                <h4>💡 喂养小贴士</h4>
                <ul>
                    <li>新生儿一般每2-3小时需要喂养一次</li>
                    <li>母乳宝宝按需喂养，不必过于拘泥时间</li>
                    <li>配方奶宝宝注意不要过度喂养</li>
                    <li>6个月后开始添加辅食，从单一食材开始</li>
                </ul>
            </div>
        `;

        setTimeout(() => {
            const chartDom = document.getElementById('feeding-chart');
            if (chartDom) {
                const myChart = echarts.init(chartDom);
                const option = {
                    tooltip: { trigger: 'axis' },
                    legend: { data: ['母乳', '配方奶', '辅食'], bottom: 0 },
                    grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
                    xAxis: {
                        type: 'category',
                        data: last7Days.map(d => dayNames[d.day]),
                        axisLabel: { fontSize: 12 }
                    },
                    yAxis: { type: 'value', minInterval: 1 },
                    series: [
                        { name: '母乳', type: 'bar', data: last7Days.map(d => d.breast), itemStyle: { color: '#FF9A9E' } },
                        { name: '配方奶', type: 'bar', data: last7Days.map(d => d.formula), itemStyle: { color: '#87CEEB' } },
                        { name: '辅食', type: 'bar', data: last7Days.map(d => d.solid), itemStyle: { color: '#A8E6CF' } }
                    ]
                };
                myChart.setOption(option);
                window.addEventListener('resize', () => myChart.resize());
            }
        }, 100);
    }

    // ===== 睡眠日志页面内容 =====
    function loadSleepLogContent() {
        if (currentSleepLogTab === 'record') {
            loadSleepRecordForm();
        } else if (currentSleepLogTab === 'stats') {
            loadSleepStats();
        }

        document.querySelectorAll('[data-sltab]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.sltab === currentSleepLogTab);
        });
    }

    function loadSleepRecordForm() {
        const records = JSON.parse(localStorage.getItem('parenting_sleep') || '[]');
        const today = new Date().toISOString().split('T')[0];

        sleepLogContent.innerHTML = `
            <div class="milestone-header">
                <h2>😴 睡眠日志</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
            </div>

            <div class="record-form">
                <h3 class="form-title">✏️ 记录睡眠</h3>
                <form id="sleep-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label>日期</label>
                            <input type="date" id="sl-date" required value="${today}">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>入睡时间</label>
                            <input type="time" id="sl-bedtime" required value="22:00">
                        </div>
                        <div class="form-group">
                            <label>醒来时间</label>
                            <input type="time" id="sl-waketime" required value="06:00">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>睡眠质量</label>
                        <select id="sl-quality">
                            <option value="good">😊 睡得好</option>
                            <option value="normal">😐 一般</option>
                            <option value="bad">😔 睡不好</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>备注</label>
                        <input type="text" id="sl-note" placeholder="如：夜醒2次">
                    </div>
                    <button type="submit" class="btn btn-primary">保存记录</button>
                </form>
            </div>

            <div class="record-list">
                <h3>📋 最近记录</h3>
                ${records.length > 0 ? records.slice(0, 10).map((r, i) => {
                    const bedTime = new Date(`${r.date}T${r.bedTime}`);
                    const wakeTime = new Date(`${r.date}T${r.wakeTime}`);
                    let duration = (wakeTime - bedTime) / (1000 * 60 * 60);
                    if (duration < 0) duration += 24;
                    return `
                        <div class="record-item">
                            <div class="record-info">
                                <span class="date">${r.date}</span>
                                <span>${r.bedTime} - ${r.wakeTime}</span>
                                <span>约${Math.round(duration)}小时</span>
                                <span>${sleepQualities[r.quality]?.icon || ''} ${sleepQualities[r.quality]?.name || ''}</span>
                            </div>
                            <div class="record-actions">
                                <button class="delete-btn" onclick="deleteSleepRecord(${i})">删除</button>
                            </div>
                        </div>
                    `;
                }).join('') : '<div class="no-record">暂无睡眠记录</div>'}
            </div>
        `;

        document.getElementById('sleep-form').addEventListener('submit', saveSleepRecord);
    }

    function loadSleepStats() {
        const records = JSON.parse(localStorage.getItem('parenting_sleep') || '[]');
        
        const goodCount = records.filter(r => r.quality === 'good').length;
        const normalCount = records.filter(r => r.quality === 'normal').length;
        const badCount = records.filter(r => r.quality === 'bad').length;

        sleepLogContent.innerHTML = `
            <div class="milestone-header">
                <h2>📊 睡眠统计</h2>
                ${currentBaby ? `<div class="current-baby-info">👶 ${currentBaby.baby_name} · ${calculateAge(currentBaby.birth_date)}</div>` : ''}
            </div>

            <div class="stats-grid">
                <div class="stats-card">
                    <div class="stats-value">${records.length}</div>
                    <div class="stats-label">总记录数</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${goodCount}</div>
                    <div class="stats-label">😊 睡得好</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${normalCount}</div>
                    <div class="stats-label">😐 一般</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${badCount}</div>
                    <div class="stats-label">😔 睡不好</div>
                </div>
            </div>

            <div class="milestone-info">
                <h4>💡 各月龄睡眠参考</h4>
                <ul>
                    <li><strong>0-3月</strong>：每天14-17小时，昼夜不规律</li>
                    <li><strong>4-12月</strong>：每天12-15小时，开始形成昼夜规律</li>
                    <li><strong>1-2岁</strong>：每天11-14小时，大多有2次小睡</li>
                    <li><strong>2-3岁</strong>：每天10-13小时，通常午睡1次</li>
                </ul>
            </div>
        `;
    }

    // ===== 数据管理页面内容 =====
    function loadDataManageContent() {
        if (currentDataManageTab === 'export') {
            loadExportPage();
        } else if (currentDataManageTab === 'import') {
            loadImportPage();
        }

        document.querySelectorAll('[data-dmtab]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.dmtab === currentDataManageTab);
        });
    }

    function loadExportPage() {
        dataManageContent.innerHTML = `
            <div class="milestone-header">
                <h2>📤 导出数据备份</h2>
            </div>

            <div class="record-form">
                <h3 class="form-title">💾 导出所有数据</h3>
                <p style="color: var(--color-text-light); margin-bottom: 1rem; font-size: 0.9rem;">
                    将您的所有本地数据导出为 JSON 文件，方便备份或在其他设备导入。
                </p>
                <button class="btn btn-primary" onclick="exportAllData()">📤 导出数据</button>
            </div>

            <div class="record-form" style="margin-top:1.5rem; background:#FFF9E6; border:2px dashed #FFD54F;">
                <h3 class="form-title">☁️ 云端同步状态</h3>
                <p style="color: var(--color-text-light); margin-bottom: 1rem; font-size: 0.9rem;">
                    ${currentUser ? '✅ 已登录，数据将在登录后自动同步到云端' : '❌ 未登录，登录后可开启云端同步'}
                </p>
                ${!currentUser ? '<button class="btn btn-secondary" onclick="openAuthModal()">立即登录</button>' : ''}
            </div>
        `;
    }

    function loadImportPage() {
        dataManageContent.innerHTML = `
            <div class="milestone-header">
                <h2>📥 导入数据恢复</h2>
            </div>

            <div class="record-form">
                <h3 class="form-title">📂 选择备份文件</h3>
                <p style="color: var(--color-text-light); margin-bottom: 1rem; font-size: 0.9rem;">
                    选择之前导出的 JSON 文件，恢复所有数据。
                </p>
                <div class="form-group">
                    <label>选择文件</label>
                    <input type="file" id="import-file" accept=".json" style="padding: 0.5rem;">
                </div>
                <button class="btn btn-primary" onclick="importAllData()">📤 导入数据</button>
            </div>

            <div class="record-form" style="margin-top:1.5rem; border: 2px solid #FFCDD2;">
                <h3 class="form-title" style="color: #E57373;">⚠️ 危险操作</h3>
                <p style="color: var(--color-text-light); margin-bottom: 1rem; font-size: 0.9rem;">
                    清除所有数据不可恢复，请确保已先导出备份！
                </p>
                <button class="btn btn-danger" onclick="clearAllData()">🗑️ 清除所有数据</button>
            </div>
        `;
    }
    
    // ===== 数据操作函数 =====
    window.saveRecord = function(e) {
        if (e) e.preventDefault();
        
        const date = document.getElementById('record-date').value;
        const height = document.getElementById('record-height').value;
        const weight = document.getElementById('record-weight').value;
        const head = document.getElementById('record-head').value;
        
        if (!date || !height || !weight) {
            showToast('请填写必填项');
            return;
        }
        
        const records = JSON.parse(localStorage.getItem('parenting_height_weight') || '[]');
        records.push({ date, height, weight, head: head || null });
        records.sort((a, b) => new Date(a.date) - new Date(b.date));
        localStorage.setItem('parenting_height_weight', JSON.stringify(records));
        showToast('记录已保存！');
        // 同步到 Supabase
        if (typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
            saveHeightWeightToSupabase({ date, height, weight, head: head || null });
        }
        loadMilestoneRecord();
    };
    
    window.editRecord = function(index) {
        const records = JSON.parse(localStorage.getItem('parenting_height_weight') || '[]');
        const record = records[index];
        
        document.getElementById('record-date').value = record.date;
        document.getElementById('record-height').value = record.height;
        document.getElementById('record-weight').value = record.weight;
        document.getElementById('record-head').value = record.head || '';
        
        records.splice(index, 1);
        localStorage.setItem('parenting_height_weight', JSON.stringify(records));
        document.querySelector('.record-form').scrollIntoView({ behavior: 'smooth' });
        showToast('编辑模式：请修改后点击保存');
    };
    
    window.deleteRecord = function(index) {
        if (!confirm('确定要删除这条记录吗？')) return;
        const records = JSON.parse(localStorage.getItem('parenting_height_weight') || '[]');
        const record = records[index];
        records.splice(index, 1);
        localStorage.setItem('parenting_height_weight', JSON.stringify(records));
        showToast('记录已删除');
        // 同步删除到 Supabase
        if (typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
            deleteHeightWeightFromSupabase(record.date);
        }
        loadMilestoneRecord();
    };
    
    window.saveObservation = function(e) {
        if (e) e.preventDefault();
        
        const category = document.getElementById('obs-category').value;
        const date = document.getElementById('obs-date').value;
        const title = document.getElementById('obs-title').value;
        const description = document.getElementById('obs-desc').value;
        const editIndex = document.getElementById('edit-index')?.value;
        
        if (!category || !date || !title) {
            showToast('请填写必填项');
            return;
        }
        
        const records = JSON.parse(localStorage.getItem('parenting_observation') || '[]');
        const newRecord = { category, date, title, description };
        
        if (editIndex !== undefined && editIndex !== null) {
            records[editIndex] = newRecord;
        } else {
            records.push(newRecord);
        }
        
        localStorage.setItem('parenting_observation', JSON.stringify(records));
        showToast('记录已保存！');
        // 同步到 Supabase
        if (typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
            saveObservationToSupabase(newRecord);
        }
        currentObservationTab = 'timeline';
        loadObservationContent();
    };
    
    window.editObservation = function(index) {
        currentObservationTab = 'add';
        loadAddObservation(true, index);
    };
    
    window.deleteObservation = function(index) {
        if (!confirm('确定要删除这条记录吗？')) return;
        const records = JSON.parse(localStorage.getItem('parenting_observation') || '[]');
        records.splice(index, 1);
        localStorage.setItem('parenting_observation', JSON.stringify(records));
        showToast('记录已删除');
        loadObservationTimeline();
    };
    
    window.showObservationPage = function() {
        currentObservationTab = 'timeline';
        loadObservationContent();
    };

    // ===== 喂养记录数据操作 =====
    window.saveFeedingRecord = function(e) {
        if (e) e.preventDefault();

        const date = document.getElementById('fr-date').value;
        const time = document.getElementById('fr-time').value;
        const type = document.getElementById('fr-type').value;
        const amount = document.getElementById('fr-amount').value;
        const duration = document.getElementById('fr-duration').value;
        const side = document.getElementById('fr-side').value;
        const note = document.getElementById('fr-note').value;

        if (!date || !time) {
            showToast('请填写必填项');
            return;
        }

        const records = JSON.parse(localStorage.getItem('parenting_feeding') || '[]');
        records.push({
            date, time, type,
            amount: amount || null,
            duration: duration || null,
            side: type === 'breast' ? side : null,
            note: note || null
        });

        localStorage.setItem('parenting_feeding', JSON.stringify(records));
        showToast('喂养记录已保存！');
        // 同步到 Supabase
        if (typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
            saveFeedingToSupabase({
                date, time, type,
                amount: amount || null,
                duration: duration || null,
                note: note || ''
            });
        }
        loadFeedingRecordForm();
    };

    window.deleteFeedingRecord = function(index) {
        if (!confirm('确定要删除这条记录吗？')) return;
        const records = JSON.parse(localStorage.getItem('parenting_feeding') || '[]');
        records.splice(index, 1);
        localStorage.setItem('parenting_feeding', JSON.stringify(records));
        showToast('记录已删除');
        loadFeedingRecordForm();
    };

    // ===== 睡眠日志数据操作 =====
    window.saveSleepRecord = function(e) {
        if (e) e.preventDefault();

        const date = document.getElementById('sl-date').value;
        const bedTime = document.getElementById('sl-bedtime').value;
        const wakeTime = document.getElementById('sl-waketime').value;
        const quality = document.getElementById('sl-quality').value;
        const note = document.getElementById('sl-note').value;

        if (!date || !bedTime || !wakeTime) {
            showToast('请填写必填项');
            return;
        }

        const records = JSON.parse(localStorage.getItem('parenting_sleep') || '[]');
        records.push({
            date, bedTime, wakeTime, quality, note: note || null
        });

        localStorage.setItem('parenting_sleep', JSON.stringify(records));
        showToast('睡眠记录已保存！');
        // 同步到 Supabase
        if (typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
            saveSleepToSupabase({
                date, start_time: bedTime, end_time: wakeTime, quality, note: note || ''
            });
        }
        loadSleepRecordForm();
    };

    window.deleteSleepRecord = function(index) {
        if (!confirm('确定要删除这条记录吗？')) return;
        const records = JSON.parse(localStorage.getItem('parenting_sleep') || '[]');
        records.splice(index, 1);
        localStorage.setItem('parenting_sleep', JSON.stringify(records));
        showToast('记录已删除');
        loadSleepRecordForm();
    };

    // ===== 数据管理操作 =====
    window.exportAllData = function() {
        const allData = {};
        // 收集所有 parenting_ 开头的数据
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('parenting_')) {
                allData[key] = localStorage.getItem(key);
            }
        }

        const exportObj = {
            app: '宝贝成长指南',
            version: '5.0',
            exportDate: new Date().toISOString(),
            data: allData
        };

        const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `宝贝成长指南_备份_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('数据导出成功！');
    };

    window.importAllData = function() {
        const fileInput = document.getElementById('import-file');
        if (!fileInput.files || !fileInput.files[0]) {
            showToast('请先选择备份文件');
            return;
        }

        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importObj = JSON.parse(e.target.result);

                if (!importObj.data) {
                    showToast('无效的备份文件');
                    return;
                }

                const dataKeys = Object.keys(importObj.data);
                let count = 0;
                dataKeys.forEach(key => {
                    if (key.startsWith('parenting_')) {
                        localStorage.setItem(key, importObj.data[key]);
                        count++;
                    }
                });

                showToast(`导入成功！恢复了 ${count} 项数据`);
                loadImportPage();
            } catch(err) {
                showToast('文件解析失败，请确认是有效的备份文件');
            }
        };
        reader.readAsText(file);
    };

    window.clearAllData = function() {
        if (!confirm('⚠️ 确定要清除所有数据吗？此操作不可恢复！\n\n建议先导出备份后再清除。')) return;
        if (!confirm('再次确认：真的要清除所有数据吗？')) return;

        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('parenting_')) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));

        showToast('所有数据已清除');
        loadImportPage();
    };
    
    // ===== Tab切换事件 =====
    document.querySelectorAll('[data-mtab]').forEach(btn => {
        btn.addEventListener('click', function() {
            currentMilestoneTab = this.dataset.mtab;
            loadMilestoneContent();
        });
    });
    
    document.querySelectorAll('[data-otab]').forEach(btn => {
        btn.addEventListener('click', function() {
            currentObservationTab = this.dataset.otab;
            loadObservationContent();
        });
    });

    document.querySelectorAll('[data-frtab]').forEach(btn => {
        btn.addEventListener('click', function() {
            currentFeedingRecordTab = this.dataset.frtab;
            loadFeedingRecordContent();
        });
    });

    document.querySelectorAll('[data-sltab]').forEach(btn => {
        btn.addEventListener('click', function() {
            currentSleepLogTab = this.dataset.sltab;
            loadSleepLogContent();
        });
    });

    document.querySelectorAll('[data-dmtab]').forEach(btn => {
        btn.addEventListener('click', function() {
            currentDataManageTab = this.dataset.dmtab;
            loadDataManageContent();
        });
    });

    document.querySelectorAll('[data-bptab]').forEach(btn => {
        btn.addEventListener('click', function() {
            currentBabyProfileTab = this.dataset.bptab;
            loadBabyProfileContent();
        });
    });
    
    // ===== 事件绑定 =====
    ageCards.forEach(card => {
        card.addEventListener('click', function() {
            const age = this.dataset.age;
            showContentPage(age, currentChannel);
        });
    });
    
    channelCards.forEach(card => {
        card.addEventListener('click', function() {
            const channel = this.dataset.channel;
            if (currentAge) {
                showContentPage(currentAge, channel);
            } else {
                showContentPage('1-3m', channel);
            }
        });
    });
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const channel = this.dataset.channel;
            if (currentAge) {
                currentChannel = channel;
                updateTabActive();
                loadContent();
            }
        });
    });
    
    backBtn.addEventListener('click', showHomePage);
    backFromMilestone.addEventListener('click', showHomePage);
    backFromObservation.addEventListener('click', showHomePage);
    backFromFeedingRecord.addEventListener('click', showHomePage);
    backFromSleepLog.addEventListener('click', showHomePage);
    backFromDataManage.addEventListener('click', showHomePage);
    backFromBabyProfile.addEventListener('click', showHomePage);
    
    goMilestone.addEventListener('click', showMilestonePage);
    goObservation.addEventListener('click', showObservationPage);
    goFeedingRecord.addEventListener('click', showFeedingRecordPage);
    goSleepLog.addEventListener('click', showSleepLogPage);
    goDataManage.addEventListener('click', showDataManagePage);
    goBabyProfile.addEventListener('click', showBabyProfilePage);
    
    function handleHash() {
        const hash = window.location.hash;
        if (hash) {
            const parts = hash.slice(1).split('/');
            if (parts.length >= 2) {
                const age = parts[0];
                const channel = parts[1];
                if (ageTitles[age] && channelTitles[channel]) {
                    showContentPage(age, channel);
                }
            }
        }
    }
    
    window.addEventListener('hashchange', handleHash);
    handleHash();
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const anyActive = [contentPage, milestonePage, observationPage, feedingRecordPage, sleepLogPage, dataManagePage, babyProfilePage].some(p => p.classList.contains('active'));
            if (anyActive) showHomePage();
        }
    });
    
    const isMobile = () => window.innerWidth <= 768;
    
    if (isMobile()) {
        channelCards.forEach(card => {
            card.addEventListener('click', function(e) {
                const channel = this.dataset.channel;
                showContentPage('0-1m', channel);
            });
        });
    }
    
    window.showToast = function(message) {
        const existingToast = document.querySelector('.success-toast');
        if (existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    };
    
    // 初始化：从localStorage加载当前宝宝
    currentBaby = getCurrentBabyFromStorage();
    updateHeaderBabyInfo();
    
    console.log('🌟 宝贝成长指南 v5 已加载（含宝宝资料管理）');
});

// ===== 覆盖 supabase-auth.js 中的 onUserSignedIn =====
const originalOnUserSignedIn = window.onUserSignedIn;
window.onUserSignedIn = async function() {
    // 调用原有逻辑
    if (originalOnUserSignedIn) {
        await originalOnUserSignedIn();
    }
    
    // 加载宝宝列表
    if (typeof loadBabies === 'function') {
        await loadBabies();
    }
    
    // 更新Header
    if (typeof updateHeaderBabyInfo === 'function') {
        updateHeaderBabyInfo();
    }
    
    // 检查是否有宝宝
    if (typeof babiesList !== 'undefined' && babiesList.length === 0) {
        // 首次登录，弹出添加宝宝弹窗
        setTimeout(() => {
            openBabyModal();
        }, 500);
    }
};

// ===== 生长曲线图表初始化 =====
function initGrowthChart(gender, chartType, userRecords) {
    const chartDom = document.getElementById('growth-chart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    const whoData = getWHOData(gender, chartType);
    
    const userData = userRecords.map(r => {
        const ageInMonths = calculateAgeInMonthsForChart(r.date);
        return [ageInMonths, parseFloat(chartType === 'height' ? r.height : r.weight)];
    }).filter(d => d[0] >= 0 && d[0] <= 36);
    
    // 响应式配置：检测手机端
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    
    // 手机端图例配置
    const legendData = isMobile ? ['50th', '用户数据'] : ['97th', '85th', '50th', '15th', '3rd', '用户数据'];
    
    // 手机端配置
    const titleFontSize = isMobile ? 13 : 16;
    const gridTop = isMobile ? '12%' : '15%';
    const gridBottom = isMobile ? '18%' : '15%';
    const yAxisNameGap = isMobile ? 35 : 45;
    
    const option = {
        title: {
            text: chartType === 'height' ? '身高曲线' : '体重曲线',
            left: 'center',
            textStyle: { fontSize: titleFontSize, fontWeight: 'normal', color: '#5D4E6D' }
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                let result = '';
                params.forEach(param => {
                    if (param.seriesName !== '用户数据') {
                        result += `${param.seriesName}: ${param.value[1]}`;
                        result += chartType === 'height' ? ' cm<br/>' : ' kg<br/>';
                    }
                });
                const userPoint = params.find(p => p.seriesName === '用户数据');
                if (userPoint) {
                    result += `<span style="color:#FF9A9E;font-weight:bold">• 您的宝宝: ${userPoint.value[1]}${chartType === 'height' ? ' cm' : ' kg'}</span>`;
                }
                return result;
            }
        },
        legend: { data: legendData, bottom: 10 },
        grid: { left: '3%', right: '4%', bottom: gridBottom, top: gridTop, containLabel: true },
        xAxis: {
            type: 'value', name: '月龄', nameLocation: 'middle', nameGap: 30,
            min: 0, max: 36, splitNumber: 12,
            axisLabel: { formatter: '{value}月' }
        },
        yAxis: {
            type: 'value',
            name: chartType === 'height' ? (isMobile ? '身高(cm)' : '身高 (cm)') : (isMobile ? '体重(kg)' : '体重 (kg)'),
            nameLocation: 'middle', nameGap: yAxisNameGap
        },
        series: [
            { name: '97th', type: 'line', data: whoData.p97, smooth: true, lineStyle: { width: 1, type: 'dashed', color: '#E57373' }, itemStyle: { color: '#E57373' }, showSymbol: false },
            { name: '85th', type: 'line', data: whoData.p85, smooth: true, lineStyle: { width: 1, type: 'dashed', color: '#FFB74D' }, itemStyle: { color: '#FFB74D' }, showSymbol: false },
            { name: '50th', type: 'line', data: whoData.p50, smooth: true, lineStyle: { width: 2, color: '#4CAF50' }, itemStyle: { color: '#4CAF50' }, showSymbol: false },
            { name: '15th', type: 'line', data: whoData.p15, smooth: true, lineStyle: { width: 1, type: 'dashed', color: '#64B5F6' }, itemStyle: { color: '#64B5F6' }, showSymbol: false },
            { name: '3rd', type: 'line', data: whoData.p3, smooth: true, lineStyle: { width: 1, type: 'dashed', color: '#9575CD' }, itemStyle: { color: '#9575CD' }, showSymbol: false },
            { name: '用户数据', type: 'scatter', data: userData, symbolSize: 12, itemStyle: { color: '#FF9A9E', borderColor: '#fff', borderWidth: 2 }, z: 10 }
        ]
    };
    
    myChart.setOption(option);
    
    // 监听屏幕变化，响应式更新图表
    window.addEventListener('resize', function() { 
        myChart.resize();
    });
}

function calculateAgeInMonthsForChart(dateStr) {
    // 优先使用当前宝宝的出生日期
    const babyData = localStorage.getItem('current_baby_data');
    let birthDate;
    
    if (babyData) {
        try {
            const baby = JSON.parse(babyData);
            birthDate = baby.birth_date;
        } catch(e) {
            birthDate = localStorage.getItem('parenting_birth_date');
        }
    } else {
        birthDate = localStorage.getItem('parenting_birth_date');
    }
    
    if (!birthDate) return 0;
    const birth = new Date(birthDate);
    const record = new Date(dateStr);
    const diffTime = record - birth;
    const diffMonths = Math.round(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    return Math.max(0, Math.min(diffMonths, 36));
}

function getWHOData(gender, chartType) {
    if (chartType === 'height') {
        return gender === 'boy' ? {
            p3: [[0,46.4],[1,51.1],[2,54.7],[3,57.6],[4,59.8],[5,61.5],[6,63.0],[7,64.3],[8,65.5],[9,66.6],[10,67.7],[11,68.7],[12,69.6],[15,72.0],[18,74.2],[21,76.4],[24,78.3],[27,80.1],[30,81.8],[33,83.4],[36,85.0]],
            p15: [[0,48.0],[1,52.7],[2,56.4],[3,59.4],[4,61.7],[5,63.4],[6,65.0],[7,66.4],[8,67.6],[9,68.8],[10,69.9],[11,71.0],[12,72.0],[15,74.5],[18,76.9],[21,79.1],[24,81.1],[27,83.0],[30,84.8],[33,86.5],[36,88.1]],
            p50: [[0,49.9],[1,54.7],[2,58.4],[3,61.4],[4,63.9],[5,65.9],[6,67.6],[7,69.2],[8,70.6],[9,72.0],[10,73.3],[11,74.5],[12,75.7],[15,78.5],[18,80.9],[21,83.2],[24,85.1],[27,86.9],[30,88.7],[33,90.4],[36,92.0]],
            p85: [[0,51.8],[2,60.3],[4,66.1],[6,70.1],[9,74.0],[12,78.8],[15,81.5],[18,84.2],[21,86.5],[24,88.6],[27,90.6],[30,92.5],[33,94.4],[36,96.1]],
            p97: [[0,53.4],[1,58.2],[2,61.8],[3,64.8],[4,67.2],[5,69.2],[6,70.9],[7,72.5],[8,74.0],[9,75.3],[10,76.6],[11,77.9],[12,79.1],[15,82.0],[18,84.6],[21,87.1],[24,89.4],[27,91.2],[30,93.0],[33,94.7],[36,96.4]]
        } : {
            p3: [[0,45.4],[1,50.0],[2,53.4],[3,55.9],[4,58.0],[5,59.7],[6,61.2],[7,62.5],[8,63.8],[9,65.0],[10,66.1],[11,67.2],[12,68.2],[15,70.4],[18,72.5],[21,74.5],[24,76.4],[27,78.1],[30,79.8],[33,81.4],[36,83.0]],
            p15: [[0,47.1],[1,51.8],[2,55.3],[3,57.9],[4,60.1],[5,61.9],[6,63.5],[7,64.9],[8,66.2],[9,67.5],[10,68.7],[11,69.9],[12,70.9],[15,73.3],[18,75.5],[21,77.5],[24,79.4],[27,81.2],[30,82.9],[33,84.5],[36,86.1]],
            p50: [[0,49.1],[1,53.7],[2,57.1],[3,59.8],[4,62.1],[5,64.0],[6,65.7],[7,67.3],[8,68.7],[9,70.1],[10,71.5],[11,72.8],[12,74.0],[15,76.4],[18,78.6],[21,80.8],[24,82.7],[27,84.5],[30,86.2],[33,87.9],[36,89.4]],
            p85: [[0,51.1],[2,58.9],[4,64.2],[6,67.8],[9,72.3],[12,76.1],[15,78.6],[18,81.0],[21,83.2],[24,85.2],[27,87.1],[30,88.9],[33,90.6],[36,92.2]],
            p97: [[0,52.7],[1,57.2],[2,60.6],[3,63.3],[4,65.6],[5,67.6],[6,69.4],[7,71.1],[8,72.6],[9,74.1],[10,75.5],[11,76.9],[12,78.1],[15,80.9],[18,83.5],[21,85.8],[24,88.0],[27,89.8],[30,91.6],[33,93.2],[36,94.8]]
        };
    } else {
        return gender === 'boy' ? {
            p3: [[0,2.5],[1,3.4],[2,4.3],[3,5.0],[4,5.6],[5,6.0],[6,6.4],[7,6.7],[8,7.0],[9,7.3],[10,7.5],[11,7.7],[12,7.9],[15,8.5],[18,9.1],[21,9.6],[24,10.1],[27,10.6],[30,11.0],[33,11.5],[36,11.9]],
            p15: [[0,2.9],[1,3.9],[2,4.9],[3,5.7],[4,6.3],[5,6.8],[6,7.2],[7,7.6],[8,7.9],[9,8.2],[10,8.5],[11,8.7],[12,8.9],[15,9.5],[18,10.2],[21,10.8],[24,11.4],[27,11.9],[30,12.4],[33,12.8],[36,13.3]],
            p50: [[0,3.3],[1,4.5],[2,5.6],[3,6.4],[4,7.0],[5,7.5],[6,7.9],[7,8.3],[8,8.6],[9,8.9],[10,9.2],[11,9.4],[12,9.6],[15,10.3],[18,11.0],[21,11.7],[24,12.3],[27,12.9],[30,13.5],[33,14.0],[36,14.5]],
            p85: [[0,3.9],[2,6.5],[4,7.8],[6,8.8],[9,9.8],[12,10.5],[15,11.2],[18,11.9],[21,12.6],[24,13.2],[27,13.8],[30,14.4],[33,14.9],[36,15.5]],
            p97: [[0,4.4],[1,5.7],[2,7.1],[3,8.0],[4,8.7],[5,9.3],[6,9.8],[7,10.3],[8,10.7],[9,11.0],[10,11.4],[11,11.7],[12,12.0],[15,12.8],[18,13.7],[21,14.4],[24,15.1],[27,15.8],[30,16.4],[33,17.0],[36,17.5]]
        } : {
            p3: [[0,2.4],[1,3.2],[2,3.9],[3,4.5],[4,5.0],[5,5.4],[6,5.7],[7,6.0],[8,6.3],[9,6.5],[10,6.8],[11,7.0],[12,7.1],[15,7.6],[18,8.2],[21,8.6],[24,9.1],[27,9.5],[30,9.9],[33,10.3],[36,10.7]],
            p15: [[0,2.8],[1,3.6],[2,4.5],[3,5.2],[4,5.7],[5,6.1],[6,6.5],[7,6.8],[8,7.1],[9,7.4],[10,7.6],[11,7.9],[12,8.1],[15,8.6],[18,9.2],[21,9.7],[24,10.2],[27,10.7],[30,11.1],[33,11.5],[36,11.9]],
            p50: [[0,3.2],[1,4.2],[2,5.1],[3,5.8],[4,6.4],[5,6.8],[6,7.2],[7,7.5],[8,7.8],[9,8.1],[10,8.4],[11,8.6],[12,8.8],[15,9.4],[18,10.0],[21,10.6],[24,11.1],[27,11.6],[30,12.1],[33,12.5],[36,13.0]],
            p85: [[0,3.7],[2,5.8],[4,7.2],[6,8.0],[9,8.9],[12,9.6],[15,10.3],[18,10.9],[21,11.5],[24,12.0],[27,12.5],[30,13.0],[33,13.5],[36,13.9]],
            p97: [[0,4.2],[1,5.4],[2,6.5],[3,7.4],[4,8.1],[5,8.7],[6,9.2],[7,9.6],[8,10.1],[9,10.4],[10,10.8],[11,11.1],[12,11.3],[15,12.1],[18,12.8],[21,13.5],[24,14.1],[27,14.7],[30,15.2],[33,15.7],[36,16.2]]
        };
    }
}
