// ===== 育儿指南网站应用逻辑 =====

document.addEventListener('DOMContentLoaded', function() {
    // 状态管理
    let currentAge = null;
    let currentChannel = 'feeding';
    let currentMilestoneTab = 'record';
    let currentObservationTab = 'timeline';
    let currentFeedingRecordTab = 'record';
    let currentSleepLogTab = 'record';
    let currentDataManageTab = 'export';
    
    // DOM元素
    const homePage = document.getElementById('home-page');
    const contentPage = document.getElementById('content-page');
    const milestonePage = document.getElementById('milestone-page');
    const observationPage = document.getElementById('observation-page');
    const feedingRecordPage = document.getElementById('feeding-record-page');
    const sleepLogPage = document.getElementById('sleep-log-page');
    const dataManagePage = document.getElementById('data-manage-page');
    const backBtn = document.getElementById('back-btn');
    const backFromMilestone = document.getElementById('back-from-milestone');
    const backFromObservation = document.getElementById('back-from-observation');
    const backFromFeedingRecord = document.getElementById('back-from-feeding-record');
    const backFromSleepLog = document.getElementById('back-from-sleep-log');
    const backFromDataManage = document.getElementById('back-from-data-manage');
    const currentAgeTitle = document.getElementById('current-age-title');
    const contentArea = document.getElementById('content-area');
    const milestoneContent = document.getElementById('milestone-content');
    const observationContent = document.getElementById('observation-content');
    const feedingRecordContent = document.getElementById('feeding-record-content');
    const sleepLogContent = document.getElementById('sleep-log-content');
    const dataManageContent = document.getElementById('data-manage-content');
    const ageCards = document.querySelectorAll('.age-card');
    const channelCards = document.querySelectorAll('.channel-card');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // 功能入口
    const goMilestone = document.getElementById('go-milestone');
    const goObservation = document.getElementById('go-observation');
    const goFeedingRecord = document.getElementById('go-feeding-record');
    const goSleepLog = document.getElementById('go-sleep-log');
    const goDataManage = document.getElementById('go-data-manage');
    
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
    
    // ===== 页面切换 =====
    function hideAllPages() {
        [contentPage, milestonePage, observationPage, feedingRecordPage, sleepLogPage, dataManagePage].forEach(p => p.classList.remove('active'));
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
        
        milestoneContent.innerHTML = `
            <div class="milestone-header">
                <h2>📊 身高体重记录</h2>
                <div class="gender-toggle">
                    <button class="gender-btn ${localStorage.getItem('parenting_gender') === 'boy' || !localStorage.getItem('parenting_gender') ? 'active' : ''}" data-gender="boy">👦 男宝宝</button>
                    <button class="gender-btn ${localStorage.getItem('parenting_gender') === 'girl' ? 'active' : ''}" data-gender="girl">👧 女宝宝</button>
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
                localStorage.setItem('parenting_gender', this.dataset.gender);
                loadMilestoneRecord();
            });
        });
    }
    
    function loadMilestoneChart() {
        const gender = localStorage.getItem('parenting_gender') || 'boy';
        const chartType = localStorage.getItem('parenting_chart_type') || 'height';
        const records = JSON.parse(localStorage.getItem('parenting_height_weight') || '[]');
        
        milestoneContent.innerHTML = `
            <div class="milestone-header">
                <h2>📈 生长曲线</h2>
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

                    <div id="fr-amount-section" class="form-group">
                        <label>喂养量 (ml)</label>
                        <input type="number" id="fr-amount" step="5" min="0" max="500" placeholder="如：120">
                    </div>

                    <div id="fr-duration-section" class="form-group">
                        <label>喂养时长 (分钟)</label>
                        <input type="number" id="fr-duration" step="1" min="1" max="120" placeholder="如：15">
                    </div>

                    <div id="fr-side-section" class="form-group">
                        <label>喂养侧</label>
                        <select id="fr-side">
                            <option value="both">两侧</option>
                            <option value="left">左侧</option>
                            <option value="right">右侧</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>备注（可选）</label>
                        <textarea id="fr-note" class="form-textarea" placeholder="如：宝宝吃得很好、吐了一点等"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">保存记录</button>
                </form>
            </div>

            <div class="record-list">
                <h3>📋 今日记录 (${todayRecords.length}次)</h3>
                ${todayRecords.length > 0 ? todayRecords.map((r, i) => {
                    const idx = records.indexOf(r);
                    return `
                    <div class="record-item">
                        <div class="record-info">
                            <span class="date">${r.time || '--:--'}</span>
                            <span>${feedingTypes[r.type]?.icon || '📝'} ${feedingTypes[r.type]?.name || r.type}</span>
                            ${r.amount ? `<span><strong>${r.amount}ml</strong></span>` : ''}
                            ${r.duration ? `<span>${r.duration}分钟</span>` : ''}
                            ${r.side === 'left' ? '<span>左侧</span>' : r.side === 'right' ? '<span>右侧</span>' : r.side === 'both' ? '<span>两侧</span>' : ''}
                        </div>
                        <div class="record-actions">
                            <button class="delete-btn" onclick="deleteFeedingRecord(${idx})">删除</button>
                        </div>
                    </div>
                    `;
                }).join('') : '<div class="no-record">今日暂无记录</div>'}
            </div>

            <div class="record-list" style="margin-top:1rem">
                <h3>📋 近7天记录</h3>
                ${renderFeedingHistory(records)}
            </div>
        `;

        // 绑定喂养类型选择
        document.querySelectorAll('[data-fdtype]').forEach(opt => {
            opt.addEventListener('click', function() {
                document.querySelectorAll('[data-fdtype]').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                document.getElementById('fr-type').value = this.dataset.fdtype;
                updateFeedingFormFields(this.dataset.fdtype);
            });
        });

        updateFeedingFormFields('breast');

        document.getElementById('feeding-form').addEventListener('submit', saveFeedingRecord);
    }

    function updateFeedingFormFields(type) {
        const amountSection = document.getElementById('fr-amount-section');
        const durationSection = document.getElementById('fr-duration-section');
        const sideSection = document.getElementById('fr-side-section');

        if (type === 'breast') {
            amountSection.style.display = 'none';
            durationSection.style.display = 'block';
            sideSection.style.display = 'block';
        } else if (type === 'formula' || type === 'water') {
            amountSection.style.display = 'block';
            durationSection.style.display = 'none';
            sideSection.style.display = 'none';
        } else if (type === 'solid') {
            amountSection.style.display = 'none';
            durationSection.style.display = 'none';
            sideSection.style.display = 'none';
        }
    }

    function renderFeedingHistory(records) {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentRecords = records.filter(r => new Date(r.date) >= sevenDaysAgo).sort((a, b) => {
            if (b.date !== a.date) return b.date.localeCompare(a.date);
            return (b.time || '').localeCompare(a.time || '');
        });

        if (recentRecords.length === 0) return '<div class="no-record">暂无记录</div>';

        return recentRecords.map((r, i) => {
            const idx = records.indexOf(r);
            return `
            <div class="record-item">
                <div class="record-info">
                    <span class="date">${r.date} ${r.time || ''}</span>
                    <span>${feedingTypes[r.type]?.icon || '📝'} ${feedingTypes[r.type]?.name || r.type}</span>
                    ${r.amount ? `<span><strong>${r.amount}ml</strong></span>` : ''}
                    ${r.duration ? `<span>${r.duration}分钟</span>` : ''}
                </div>
                <div class="record-actions">
                    <button class="delete-btn" onclick="deleteFeedingRecord(${idx})">删除</button>
                </div>
            </div>
            `;
        }).join('');
    }

    function loadFeedingStats() {
        const records = JSON.parse(localStorage.getItem('parenting_feeding') || '[]');
        const today = new Date().toISOString().split('T')[0];

        // 今日统计
        const todayRecords = records.filter(r => r.date === today);
        const todayBreast = todayRecords.filter(r => r.type === 'breast');
        const todayFormula = todayRecords.filter(r => r.type === 'formula');
        const todaySolid = todayRecords.filter(r => r.type === 'solid');
        const todayTotalFormula = todayFormula.reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0);

        // 近7天统计
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const weekRecords = records.filter(r => new Date(r.date) >= sevenDaysAgo);

        feedingRecordContent.innerHTML = `
            <div class="milestone-header">
                <h2>📊 喂养统计</h2>
            </div>

            <div class="stats-grid">
                <div class="stats-card">
                    <div class="stats-value">${todayRecords.length}</div>
                    <div class="stats-label">今日喂养次数</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${todayBreast.length}</div>
                    <div class="stats-label">母乳次数</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${todayTotalFormula > 0 ? todayTotalFormula + 'ml' : '-'}</div>
                    <div class="stats-label">配方奶总量</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${todaySolid.length}</div>
                    <div class="stats-label">辅食次数</div>
                </div>
            </div>

            <div class="chart-container">
                <div id="feeding-chart" class="chart-wrapper"></div>
            </div>

            <div class="milestone-info">
                <h4>💡 喂养参考</h4>
                <ul>
                    <li><strong>0-1月</strong>：每天8-12次，按需喂养</li>
                    <li><strong>1-3月</strong>：每天6-8次，约600-800ml</li>
                    <li><strong>3-6月</strong>：每天5-6次，约750-900ml</li>
                    <li><strong>6-12月</strong>：每天4-5次奶+1-3次辅食</li>
                    <li><strong>1-3岁</strong>：每天3餐+2次奶（约400-600ml）</li>
                </ul>
            </div>
        `;

        // 绘制近7天喂养图表
        setTimeout(() => {
            initFeedingChart(weekRecords);
        }, 100);
    }

    function initFeedingChart(records) {
        const chartDom = document.getElementById('feeding-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const days = [];
        const breastCounts = [];
        const formulaAmounts = [];
        const solidCounts = [];

        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const label = (d.getMonth() + 1) + '/' + d.getDate();
            days.push(label);

            const dayRecords = records.filter(r => r.date === dateStr);
            breastCounts.push(dayRecords.filter(r => r.type === 'breast').length);
            formulaAmounts.push(dayRecords.filter(r => r.type === 'formula').reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0));
            solidCounts.push(dayRecords.filter(r => r.type === 'solid').length);
        }

        const option = {
            title: { text: '近7天喂养趋势', left: 'center', textStyle: { fontSize: 14, fontWeight: 'normal', color: '#5D4E6D' } },
            tooltip: { trigger: 'axis' },
            legend: { data: ['母乳次数', '配方奶(ml)', '辅食次数'], bottom: 0 },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '15%', containLabel: true },
            xAxis: { type: 'category', data: days },
            yAxis: [
                { type: 'value', name: '次数', min: 0 },
                { type: 'value', name: 'ml', min: 0 }
            ],
            series: [
                { name: '母乳次数', type: 'bar', data: breastCounts, itemStyle: { color: '#FF9A9E' } },
                { name: '配方奶(ml)', type: 'bar', yAxisIndex: 1, data: formulaAmounts, itemStyle: { color: '#87CEEB' } },
                { name: '辅食次数', type: 'bar', data: solidCounts, itemStyle: { color: '#A8E6CF' } }
            ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', () => myChart.resize());
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
        const todayRecords = records.filter(r => r.date === today);
        const now = new Date();
        const timeNow = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');

        // 计算今日总睡眠
        const todayTotalMinutes = todayRecords.reduce((sum, r) => {
            if (r.bedTime && r.wakeTime) {
                return sum + calcSleepMinutes(r.bedTime, r.wakeTime);
            }
            return sum;
        }, 0);
        const todayTotalHours = (todayTotalMinutes / 60).toFixed(1);

        sleepLogContent.innerHTML = `
            <div class="milestone-header">
                <h2>😴 睡眠日志</h2>
            </div>

            <div class="stats-grid" style="margin-bottom:1.5rem">
                <div class="stats-card">
                    <div class="stats-value">${todayTotalHours}h</div>
                    <div class="stats-label">今日总睡眠</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${todayRecords.length}</div>
                    <div class="stats-label">今日睡眠次数</div>
                </div>
            </div>

            <div class="record-form">
                <h3 class="form-title">✏️ 记录一次睡眠</h3>
                <form id="sleep-form">
                    <div class="form-group">
                        <label>日期</label>
                        <input type="date" id="sl-date" required value="${today}">
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>入睡时间</label>
                            <input type="time" id="sl-bedtime" required value="21:00">
                        </div>
                        <div class="form-group">
                            <label>醒来时间</label>
                            <input type="time" id="sl-waketime" required value="${timeNow}">
                        </div>
                    </div>

                    <div class="form-section">
                        <h4>睡眠质量</h4>
                        <div class="category-options">
                            <div class="category-option selected" data-sqtype="good">
                                <div class="cat-icon">😊</div>
                                <div class="cat-name">睡得好</div>
                            </div>
                            <div class="category-option" data-sqtype="normal">
                                <div class="cat-icon">😐</div>
                                <div class="cat-name">一般</div>
                            </div>
                            <div class="category-option" data-sqtype="bad">
                                <div class="cat-icon">😔</div>
                                <div class="cat-name">睡不好</div>
                            </div>
                        </div>
                        <input type="hidden" id="sl-quality" value="good">
                    </div>

                    <div class="form-group">
                        <label>备注（可选）</label>
                        <textarea id="sl-note" class="form-textarea" placeholder="如：夜醒2次、需要抱睡等"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">保存记录</button>
                </form>
            </div>

            <div class="record-list">
                <h3>📋 今日睡眠记录</h3>
                ${todayRecords.length > 0 ? todayRecords.map((r, i) => {
                    const idx = records.indexOf(r);
                    const dur = calcSleepMinutes(r.bedTime, r.wakeTime);
                    const hours = Math.floor(dur / 60);
                    const mins = dur % 60;
                    return `
                    <div class="record-item">
                        <div class="record-info">
                            <span class="date">${r.bedTime || '--:--'} → ${r.wakeTime || '--:--'}</span>
                            <span><strong>${hours}h${mins > 0 ? mins + 'min' : ''}</strong></span>
                            <span>${sleepQualities[r.quality]?.icon || ''} ${sleepQualities[r.quality]?.name || ''}</span>
                        </div>
                        <div class="record-actions">
                            <button class="delete-btn" onclick="deleteSleepRecord(${idx})">删除</button>
                        </div>
                    </div>
                    `;
                }).join('') : '<div class="no-record">今日暂无记录</div>'}
            </div>

            <div class="record-list" style="margin-top:1rem">
                <h3>📋 近7天记录</h3>
                ${renderSleepHistory(records)}
            </div>
        `;

        // 绑定睡眠质量选择
        document.querySelectorAll('[data-sqtype]').forEach(opt => {
            opt.addEventListener('click', function() {
                document.querySelectorAll('[data-sqtype]').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                document.getElementById('sl-quality').value = this.dataset.sqtype;
            });
        });

        document.getElementById('sleep-form').addEventListener('submit', saveSleepRecord);
    }

    function calcSleepMinutes(bedTime, wakeTime) {
        if (!bedTime || !wakeTime) return 0;
        const [bh, bm] = bedTime.split(':').map(Number);
        const [wh, wm] = wakeTime.split(':').map(Number);
        let bedMin = bh * 60 + bm;
        let wakeMin = wh * 60 + wm;
        if (wakeMin <= bedMin) wakeMin += 24 * 60; // 跨夜
        return wakeMin - bedMin;
    }

    function renderSleepHistory(records) {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentRecords = records.filter(r => new Date(r.date) >= sevenDaysAgo).sort((a, b) => {
            if (b.date !== a.date) return b.date.localeCompare(a.date);
            return (b.bedTime || '').localeCompare(a.bedTime || '');
        });

        if (recentRecords.length === 0) return '<div class="no-record">暂无记录</div>';

        return recentRecords.map((r, i) => {
            const idx = records.indexOf(r);
            const dur = calcSleepMinutes(r.bedTime, r.wakeTime);
            const hours = Math.floor(dur / 60);
            const mins = dur % 60;
            return `
            <div class="record-item">
                <div class="record-info">
                    <span class="date">${r.date}</span>
                    <span>${r.bedTime} → ${r.wakeTime}</span>
                    <span><strong>${hours}h${mins > 0 ? mins + 'min' : ''}</strong></span>
                    <span>${sleepQualities[r.quality]?.icon || ''}</span>
                </div>
                <div class="record-actions">
                    <button class="delete-btn" onclick="deleteSleepRecord(${idx})">删除</button>
                </div>
            </div>
            `;
        }).join('');
    }

    function loadSleepStats() {
        const records = JSON.parse(localStorage.getItem('parenting_sleep') || '[]');
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const weekRecords = records.filter(r => new Date(r.date) >= sevenDaysAgo);

        // 计算平均睡眠
        const dailySleep = {};
        weekRecords.forEach(r => {
            if (!dailySleep[r.date]) dailySleep[r.date] = 0;
            dailySleep[r.date] += calcSleepMinutes(r.bedTime, r.wakeTime);
        });
        const days = Object.keys(dailySleep);
        const avgSleep = days.length > 0 ? (days.reduce((sum, d) => sum + dailySleep[d], 0) / days.length / 60).toFixed(1) : '-';
        const avgSessions = days.length > 0 ? (weekRecords.length / days.length).toFixed(1) : '-';

        sleepLogContent.innerHTML = `
            <div class="milestone-header">
                <h2>📊 睡眠统计</h2>
            </div>

            <div class="stats-grid">
                <div class="stats-card">
                    <div class="stats-value">${avgSleep}h</div>
                    <div class="stats-label">日均睡眠</div>
                </div>
                <div class="stats-card">
                    <div class="stats-value">${avgSessions}</div>
                    <div class="stats-label">日均睡眠次数</div>
                </div>
            </div>

            <div class="chart-container">
                <div id="sleep-chart" class="chart-wrapper"></div>
            </div>

            <div class="milestone-info">
                <h4>💡 睡眠参考</h4>
                <ul>
                    <li><strong>0-1月</strong>：每天16-18小时，无昼夜节律</li>
                    <li><strong>1-3月</strong>：每天14-16小时，夜间睡眠延长</li>
                    <li><strong>3-6月</strong>：每天12-15小时，可能睡整觉</li>
                    <li><strong>6-12月</strong>：每天12-14小时，白天2次小睡</li>
                    <li><strong>1-2岁</strong>：每天11-14小时，白天1次小睡</li>
                    <li><strong>2-3岁</strong>：每天10-13小时，可能不再午睡</li>
                </ul>
            </div>
        `;

        setTimeout(() => {
            initSleepChart(weekRecords);
        }, 100);
    }

    function initSleepChart(records) {
        const chartDom = document.getElementById('sleep-chart');
        if (!chartDom) return;

        const myChart = echarts.init(chartDom);
        const days = [];
        const sleepHours = [];
        const sessionCounts = [];

        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const label = (d.getMonth() + 1) + '/' + d.getDate();
            days.push(label);

            const dayRecords = records.filter(r => r.date === dateStr);
            const totalMin = dayRecords.reduce((sum, r) => sum + calcSleepMinutes(r.bedTime, r.wakeTime), 0);
            sleepHours.push(parseFloat((totalMin / 60).toFixed(1)));
            sessionCounts.push(dayRecords.length);
        }

        const option = {
            title: { text: '近7天睡眠趋势', left: 'center', textStyle: { fontSize: 14, fontWeight: 'normal', color: '#5D4E6D' } },
            tooltip: { trigger: 'axis' },
            legend: { data: ['睡眠时长(h)', '睡眠次数'], bottom: 0 },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '15%', containLabel: true },
            xAxis: { type: 'category', data: days },
            yAxis: [
                { type: 'value', name: '小时', min: 0 },
                { type: 'value', name: '次数', min: 0 }
            ],
            series: [
                { name: '睡眠时长(h)', type: 'bar', data: sleepHours, itemStyle: { color: '#B39DDB' } },
                { name: '睡眠次数', type: 'line', yAxisIndex: 1, data: sessionCounts, itemStyle: { color: '#FF9A9E' }, lineStyle: { color: '#FF9A9E' } }
            ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', () => myChart.resize());
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
        // 统计各模块数据量
        const dataKeys = [
            { key: 'parenting_height_weight', name: '身高体重记录', icon: '📊' },
            { key: 'parenting_observation', name: '观察手记', icon: '📝' },
            { key: 'parenting_feeding', name: '喂养记录', icon: '🍼' },
            { key: 'parenting_sleep', name: '睡眠日志', icon: '😴' },
            { key: 'parenting_gender', name: '宝宝性别', icon: '👶' },
            { key: 'parenting_birth_date', name: '宝宝出生日期', icon: '🎂' }
        ];

        const dataSummary = dataKeys.map(dk => {
            const raw = localStorage.getItem(dk.key);
            let count = '-';
            if (raw) {
                try {
                    const parsed = JSON.parse(raw);
                    count = Array.isArray(parsed) ? parsed.length + '条' : '已设置';
                } catch(e) {
                    count = '已设置';
                }
            } else {
                count = '无数据';
            }
            return { ...dk, count };
        });

        dataManageContent.innerHTML = `
            <div class="milestone-header">
                <h2>📤 导出备份</h2>
            </div>

            <div class="milestone-info">
                <h4>📋 当前数据概况</h4>
                <ul>
                    ${dataSummary.map(d => `<li>${d.icon} ${d.name}：<strong>${d.count}</strong></li>`).join('')}
                </ul>
            </div>

            <div class="record-form">
                <h3 class="form-title">💾 一键导出所有数据</h3>
                <p style="color: var(--color-text-light); margin-bottom: 1rem; font-size: 0.9rem;">
                    导出为 JSON 文件，保存到你的电脑或手机。清浏览器缓存后可通过「导入恢复」还原所有数据。
                </p>
                <button class="btn btn-primary" onclick="exportAllData()">📥 导出全部数据</button>
            </div>

            <div class="milestone-info" style="margin-top:1.5rem">
                <h4>💡 备份建议</h4>
                <ul>
                    <li>建议每周导出一次备份，养成习惯</li>
                    <li>重要数据更新后及时导出</li>
                    <li>导出文件保存在安全的地方（云盘/电脑）</li>
                    <li>更换手机或浏览器前务必先导出</li>
                </ul>
            </div>
        `;
    }

    function loadImportPage() {
        dataManageContent.innerHTML = `
            <div class="milestone-header">
                <h2>📥 导入恢复</h2>
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
            version: '2.0',
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
    
    goMilestone.addEventListener('click', showMilestonePage);
    goObservation.addEventListener('click', showObservationPage);
    goFeedingRecord.addEventListener('click', showFeedingRecordPage);
    goSleepLog.addEventListener('click', showSleepLogPage);
    goDataManage.addEventListener('click', showDataManagePage);
    
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
            const anyActive = [contentPage, milestonePage, observationPage, feedingRecordPage, sleepLogPage, dataManagePage].some(p => p.classList.contains('active'));
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
    
    console.log('🌟 宝贝成长指南 v2.1 已加载（含Supabase用户系统）');
});

// ===== 生长曲线图表初始化 =====
function initGrowthChart(gender, chartType, userRecords) {
    const chartDom = document.getElementById('growth-chart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    const whoData = getWHOData(gender, chartType);
    
    const userData = userRecords.map(r => {
        const ageInMonths = calculateAgeInMonths(r.date);
        return [ageInMonths, parseFloat(chartType === 'height' ? r.height : r.weight)];
    }).filter(d => d[0] >= 0 && d[0] <= 36);
    
    const option = {
        title: {
            text: chartType === 'height' ? '身高曲线（年龄-身高）' : '体重曲线（年龄-体重）',
            left: 'center',
            textStyle: { fontSize: 16, fontWeight: 'normal', color: '#5D4E6D' }
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
        legend: { data: ['97th', '85th', '50th', '15th', '3rd', '用户数据'], bottom: 10 },
        grid: { left: '3%', right: '4%', bottom: '15%', top: '15%', containLabel: true },
        xAxis: {
            type: 'value', name: '月龄', nameLocation: 'middle', nameGap: 30,
            min: 0, max: 36, splitNumber: 12,
            axisLabel: { formatter: '{value}月' }
        },
        yAxis: {
            type: 'value',
            name: chartType === 'height' ? '身高 (cm)' : '体重 (kg)',
            nameLocation: 'middle', nameGap: 45
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
    window.addEventListener('resize', function() { myChart.resize(); });
}

function calculateAgeInMonths(dateStr) {
    const birthDate = localStorage.getItem('parenting_birth_date');
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
