// ===== 育儿指南内容数据 =====

const contentData = {
    // ===== 喂养频道 =====
    feeding: {
        "0-1m": {
            title: "0-1月龄 · 喂养指南",
            cards: [
                {
                    id: "breast-formula",
                    icon: "🍼",
                    title: "母乳/配方奶喂养",
                    content: `
                        <h4>初乳：宝宝的第一份礼物</h4>
                        <p>产后最初几天分泌的初乳，量少但营养丰富，含有大量免疫物质，是宝宝最珍贵的口粮。</p>
                        <ul>
                            <li><strong>开奶时机</strong>：出生后30分钟内开始哺乳，早接触、早吸吮、早开奶</li>
                            <li><strong>喂养频率</strong>：按需喂养，通常每2-3小时一次，每天8-12次</li>
                            <li><strong>判断饥饱</strong>：看尿布（每天6片以上湿尿布）、看体重增长</li>
                        </ul>
                        
                        <h4>配方奶喂养要点</h4>
                        <p>无法母乳喂养时，选择婴儿配方奶，严格按照说明比例冲调。</p>
                        <ul>
                            <li>水温控制在40-45℃，先水后粉</li>
                            <li>使用专用量勺，平匙刮平</li>
                            <li>奶瓶奶嘴每次使用后清洗消毒</li>
                            <li>喂奶时奶液充满奶嘴，避免吸入空气</li>
                        </ul>
                        
                        <div class="tip-box">
                            母乳是宝宝最好的食物，世界卫生组织建议纯母乳喂养至6个月。
                        </div>
                        <p class="source-ref">参考：《美国儿科协会育儿百科》第7版</p>
                    `
                },
                {
                    id: "feeding-signs",
                    icon: "👶",
                    title: "饥饿与吃饱的信号",
                    content: `
                        <h4>宝宝饥饿的早期信号</h4>
                        <ul>
                            <li>舔嘴唇、吸手指</li>
                            <li>头转向乳房方向，张嘴寻觅</li>
                            <li>哭闹（已是饥饿晚期信号）</li>
                        </ul>
                        
                        <h4>宝宝吃饱的判断</h4>
                        <ul>
                            <li>自动松开乳头或奶嘴</li>
                            <li>神情满足、放松</li>
                            <li>每天至少6-8次小便</li>
                            <li>出生后体重逐渐回升</li>
                        </ul>
                        
                        <div class="warning-box">
                            <strong>注意：</strong>避免过度喂养，新生儿胃容量小，强迫进食可能造成吐奶、胀气。
                        </div>
                    `
                },
                {
                    id: "burping",
                    icon: "🤱",
                    title: "拍嗝技巧",
                    content: `
                        <p>每次喂奶后都需要拍嗝，帮助宝宝排出吞入的空气，减少吐奶。</p>
                        
                        <h4>三种常用拍嗝姿势</h4>
                        
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>竖抱拍嗝（最常用）</h4>
                                <p>宝宝竖趴在大人胸前，头靠在肩窝，一只手托住臀部，另一只手呈空心掌从下往上轻拍背部</p>
                            </div>
                            <div class="timeline-item">
                                <h4>坐姿拍嗝</h4>
                                <p>宝宝坐在大人腿上，身体前倾，用手托住下巴，另一只手轻拍背部</p>
                            </div>
                            <div class="timeline-item">
                                <h4>俯卧拍嗝</h4>
                                <p>宝宝趴在大人腿上，头部略高于身体，轻拍背部或画圈按摩</p>
                            </div>
                        </div>
                        
                        <div class="tip-box">
                            拍嗝时间一般为3-5分钟，若无嗝排出也可停止，让宝宝右侧卧位休息。
                        </div>
                    `
                },
                {
                    id: "feeding-troubles",
                    icon: "⚠️",
                    title: "喂养常见问题",
                    content: `
                        <h4>吐奶</h4>
                        <p>新生儿吐奶多为生理性，因贲门括约肌发育不完善导致。</p>
                        <ul>
                            <li>喂奶后竖抱拍嗝</li>
                            <li>采用少量多次喂养</li>
                            <li>喂奶时避免宝宝吸入过多空气</li>
                            <li>垫高上半身睡觉（需成人看护）</li>
                        </ul>
                        
                        <h4>乳头混淆</h4>
                        <p>过早使用奶嘴可能导致宝宝拒绝乳头。</p>
                        <ul>
                            <li>产后尽量延迟使用奶瓶</li>
                            <li>必要时使用勺喂或杯喂</li>
                            <li>保持频繁皮肤接触</li>
                        </ul>
                        
                        <div class="warning-box">
                            如出现频繁剧烈呕吐、体重不增、喷射性吐奶等情况，需及时就医。
                        </div>
                    `
                }
            ]
        },
        "1-3m": {
            title: "1-3月龄 · 喂养指南",
            cards: [
                {
                    id: "breast-formula",
                    icon: "🍼",
                    title: "母乳/配方奶喂养",
                    content: `
                        <h4>喂养原则</h4>
                        <p>这个阶段仍以奶类为主食，母乳或配方奶能够满足婴儿全部营养需求。</p>
                        <ul>
                            <li><strong>喂养次数</strong>：每天6-8次，夜奶逐渐减少</li>
                            <li><strong>奶量参考</strong>：每次120-150ml，每日总奶量600-800ml</li>
                            <li><strong>无需额外补水</strong>：母乳或配方奶含水量充足</li>
                        </ul>
                        
                        <h4>妈妈营养提醒</h4>
                        <ul>
                            <li>保持均衡饮食，多摄入优质蛋白</li>
                            <li>继续补充叶酸、钙、铁</li>
                            <li>充足睡眠，心情愉快</li>
                            <li>避免吸烟、饮酒、浓茶咖啡</li>
                        </ul>
                        
                        <div class="tip-box">
                            纯母乳喂养的宝宝，妈妈每日额外补充500ml牛奶或等量钙剂。
                        </div>
                    `
                },
                {
                    id: "feeding-schedule",
                    icon: "⏰",
                    title: "喂养时间规律",
                    content: `
                        <p>2-3月龄开始，宝宝逐渐形成规律的生活节奏。</p>
                        
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>时间</th>
                                        <th>喂养安排</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>6:00-7:00</td>
                                        <td>起床喂奶</td>
                                    </tr>
                                    <tr>
                                        <td>9:00-10:00</td>
                                        <td>喂奶</td>
                                    </tr>
                                    <tr>
                                        <td>12:00-13:00</td>
                                        <td>喂奶</td>
                                    </tr>
                                    <tr>
                                        <td>15:00-16:00</td>
                                        <td>喂奶</td>
                                    </tr>
                                    <tr>
                                        <td>18:00-19:00</td>
                                        <td>喂奶</td>
                                    </tr>
                                    <tr>
                                        <td>21:00-22:00</td>
                                        <td>喂奶（睡前密集喂养）</td>
                                    </tr>
                                    <tr>
                                        <td>夜间</td>
                                        <td>按需喂养1-2次</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <p class="source-ref">注：个体差异较大，仅供参考</p>
                    `
                },
                {
                    id: "growth-check",
                    icon: "📈",
                    title: "生长监测",
                    content: `
                        <h4>体重增长参考</h4>
                        <ul>
                            <li>前3个月：每月增长约700-1000g</li>
                            <li>定期测量并记录生长曲线</li>
                            <li>42天体检时重点关注发育情况</li>
                        </ul>
                        
                        <h4>身高增长参考</h4>
                        <ul>
                            <li>前3个月：每月增长约3-4cm</li>
                            <li>充足的维生素D促进骨骼发育</li>
                        </ul>
                        
                        <div class="tip-box">
                            坚持补充维生素D每日400IU，促进钙吸收，预防佝偻病。
                        </div>
                    `
                }
            ]
        },
        "3-6m": {
            title: "3-6月龄 · 喂养指南",
            cards: [
                {
                    id: "breast-formula",
                    icon: "🍼",
                    title: "奶类喂养",
                    content: `
                        <h4>喂养安排</h4>
                        <ul>
                            <li><strong>喂养次数</strong>：每天5-6次</li>
                            <li><strong>单次奶量</strong>：150-180ml</li>
                            <li><strong>总奶量</strong>：750-900ml</li>
                        </ul>
                        
                        <h4>本阶段重要变化</h4>
                        <p>随着消化系统成熟，宝宝可以开始为添加辅食做准备了。</p>
                        <ul>
                            <li>挺舌反射逐渐消失</li>
                            <li>能独坐或靠坐</li>
                            <li>对食物产生兴趣</li>
                        </ul>
                        
                        <div class="warning-box">
                            <strong>辅食添加信号：</strong>WHO建议6月龄添加辅食，不早于4个月。每个宝宝发育不同，请观察是否出现添加信号。
                        </div>
                    `
                },
                {
                    id: "solid-food-ready",
                    icon: "🥄",
                    title: "辅食添加准备",
                    content: `
                        <h4>辅食添加时机（4-6月龄）</h4>
                        <ul>
                            <li>体重达到出生时的2倍以上（至少6kg）</li>
                            <li>头部控制稳定，能独坐片刻</li>
                            <li>对大人食物感兴趣，伸手抓取</li>
                            <li>勺子靠近时能张嘴</li>
                        </ul>
                        
                        <h4>第一口辅食选择</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>辅食类型</th>
                                        <th>推荐理由</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>强化铁米粉</td>
                                        <td>首选！补铁首选，满足6月后铁需求</td>
                                    </tr>
                                    <tr>
                                        <td>肉泥</td>
                                        <td>铁吸收率高，优选红肉</td>
                                    </tr>
                                    <tr>
                                        <td>蔬菜泥</td>
                                        <td>补充维生素，优先低敏蔬菜</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="tip-box">
                            从一小勺开始，观察3天有无过敏反应，再逐渐加量。
                        </div>
                        <p class="source-ref">参考：《中国居民膳食指南2022》0-6月龄喂养</p>
                    `
                },
                {
                    id: "feeding-skills",
                    icon: "👅",
                    title: "喂养技能培养",
                    content: `
                        <h4>吞咽能力发展</h4>
                        <ul>
                            <li>从稀糊状 → 稠糊状 → 泥状过渡</li>
                            <li>用软勺喂养，让宝宝感受食物</li>
                            <li>不要强迫，给宝宝适应时间</li>
                        </ul>
                        
                        <h4>进餐习惯培养</h4>
                        <ul>
                            <li>固定位置，安静环境</li>
                            <li>固定进餐时间</li>
                            <li>避免边吃边玩</li>
                            <li>让宝宝看着食物，增加兴趣</li>
                        </ul>
                        
                        <div class="tip-box">
                            添加辅食后仍需保证奶量，不要因为辅食影响奶类摄入。
                        </div>
                    `
                }
            ]
        },
        "6-12m": {
            title: "6-12月龄 · 喂养指南",
            cards: [
                {
                    id: "solid-food-guide",
                    icon: "🍚",
                    title: "辅食添加全攻略",
                    content: `
                        <h4>辅食添加原则</h4>
                        <p>从一种到多种、从少到多、从稀到稠、从细到粗，循序渐进。</p>
                        
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>月龄</th>
                                        <th>食物质地</th>
                                        <th>餐次</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>6月</td>
                                        <td>细腻泥糊状</td>
                                        <td>1次/日</td>
                                    </tr>
                                    <tr>
                                        <td>7-9月</td>
                                        <td>稠糊→小颗粒</td>
                                        <td>2次/日</td>
                                    </tr>
                                    <tr>
                                        <td>10-12月</td>
                                        <td>软饭、小块食物</td>
                                        <td>3次/日</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>辅食引入顺序</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>6月龄</h4>
                                <p>强化铁米粉 → 蔬菜泥（南瓜、土豆、胡萝卜）→ 水果泥（苹果、香蕉）</p>
                            </div>
                            <div class="timeline-item">
                                <h4>7月龄</h4>
                                <p>肉泥（鸡肉、猪肉、牛肉）→ 蛋黄（从1/4开始）→ 鱼泥</p>
                            </div>
                            <div class="timeline-item">
                                <h4>8-9月龄</h4>
                                <p>引入手指食物，如蒸软的胡萝卜条、香蕉片</p>
                            </div>
                        </div>
                        
                        <p class="source-ref">参考：中国卫健委《婴幼儿辅食添加营养指南》WS/T 678-2020</p>
                    `
                },
                {
                    id: "allergy-prevention",
                    icon: "⚠️",
                    title: "过敏预防与应对",
                    content: `
                        <h4>易过敏食物（需注意）</h4>
                        <ul>
                            <li>鸡蛋清、牛奶及奶制品</li>
                            <li>花生、坚果类</li>
                            <li>小麦、大豆</li>
                            <li>鱼、虾、贝类</li>
                            <li>芒果、猕猴桃等热带水果</li>
                        </ul>
                        
                        <h4>添加过敏食物的原则</h4>
                        <ul>
                            <li>新食物逐一添加，每种观察3-5天</li>
                            <li>上午添加，便于观察</li>
                            <li>从少量开始，逐渐加量</li>
                            <li>引入易过敏食物不必延迟</li>
                        </ul>
                        
                        <h4>过敏反应识别</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>轻度过敏</th>
                                        <th>严重过敏（需就医）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>口周红疹</td>
                                        <td>全身荨麻疹</td>
                                    </tr>
                                    <tr>
                                        <td>轻微腹泻</td>
                                        <td>呼吸困难、喘息</td>
                                    </tr>
                                    <tr>
                                        <td>湿疹加重</td>
                                        <td>呕吐、腹泻频繁</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>面色苍白、意识不清</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="warning-box">
                            严重过敏反应可致命！出现呼吸困难、喉头水肿等症状，立即拨打120急救。
                        </div>
                    `
                },
                {
                    id: "recipes",
                    icon: "🥣",
                    title: "分月龄食谱推荐",
                    content: `
                        <h4>6-7月龄食谱</h4>
                        <ul>
                            <li><strong>强化铁米粉糊</strong>：5g米粉+50ml温开水，搅拌均匀</li>
                            <li><strong>南瓜泥</strong>：蒸熟后研磨成泥</li>
                            <li><strong>苹果泥</strong>：生苹果刮泥或蒸熟后捣泥</li>
                            <li><strong>土豆胡萝卜泥</strong>：蒸熟后混合研磨</li>
                        </ul>
                        
                        <h4>8-9月龄食谱</h4>
                        <ul>
                            <li><strong>鸡肉南瓜粥</strong>：稀粥+鸡肉泥+南瓜泥</li>
                            <li><strong>番茄鸡蛋面</strong>：细面+番茄泥+蛋黄</li>
                            <li><strong>鱼肉粥</strong>：稀粥+无刺鱼肉泥</li>
                            <li><strong>豆腐蔬菜条</strong>：蒸豆腐+蔬菜泥</li>
                        </ul>
                        
                        <h4>10-12月龄食谱</h4>
                        <ul>
                            <li><strong>软饭</strong>：米和水1:2煮成软饭</li>
                            <li><strong>馄饨/饺子</strong>：皮薄馅小</li>
                            <li><strong>小包子</strong>：蔬菜肉馅</li>
                            <li><strong>蒸糕</strong>：鸡蛋+面粉+蔬菜</li>
                        </ul>
                        
                        <div class="tip-box">
                            1岁内辅食不加盐、糖、酱油等调味品，保持食物原味。
                        </div>
                    `
                },
                {
                    id: "milk-transition",
                    icon: "🥛",
                    title: "奶类过渡",
                    content: `
                        <h4>1岁内奶类地位</h4>
                        <p>1岁前，奶类仍是主要营养来源，辅食为辅。</p>
                        <ul>
                            <li>母乳或配方奶每天600-800ml</li>
                            <li>奶类提供优质蛋白和钙</li>
                            <li>不要用纯牛奶替代母乳/配方奶</li>
                        </ul>
                        
                        <h4>何时可以喝纯牛奶</h4>
                        <p>1岁后可以尝试喝全脂纯牛奶，每日300-400ml。</p>
                        <ul>
                            <li>选择巴氏杀菌或高温灭菌纯牛奶</li>
                            <li>避免饮用含糖调制乳</li>
                            <li>如有牛奶过敏，需在医生指导下添加</li>
                        </ul>
                        
                        <div class="tip-box">
                            1岁后可以引入酸奶、奶酪等乳制品，作为多样化的钙来源。
                        </div>
                    `
                }
            ]
        },
        "1-2y": {
            title: "1-2岁 · 喂养指南",
            cards: [
                {
                    id: "diet-balance",
                    icon: "🍽️",
                    title: "均衡膳食结构",
                    content: `
                        <h4>每日膳食安排</h4>
                        <p>1-2岁幼儿需要更多样化的食物来满足生长发育需求。</p>
                        
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>食物类别</th>
                                        <th>每日推荐量</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>谷薯类</td>
                                        <td>50-100g（生重）</td>
                                    </tr>
                                    <tr>
                                        <td>蔬菜水果</td>
                                        <td>各50-150g</td>
                                    </tr>
                                    <tr>
                                        <td>肉禽鱼蛋</td>
                                        <td>50-75g</td>
                                    </tr>
                                    <tr>
                                        <td>奶类</td>
                                        <td>400-500ml</td>
                                    </tr>
                                    <tr>
                                        <td>大豆/坚果</td>
                                        <td>5-15g</td>
                                    </tr>
                                    <tr>
                                        <td>油</td>
                                        <td>10-15g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>辅食变主食</h4>
                        <p>1岁后辅食逐渐成为主角，奶类退居辅助地位。</p>
                    `
                },
                {
                    id: "food-texture",
                    icon: "🍳",
                    title: "食物质地进阶",
                    content: `
                        <h4>1-1.5岁食物性状</h4>
                        <ul>
                            <li>软烂的米饭、面条</li>
                            <li>小丁块、小薄片</li>
                            <li>蒸煮软化的蔬菜</li>
                            <li>细碎的肉丸、肉饼</li>
                        </ul>
                        
                        <h4>1.5-2岁食物性状</h4>
                        <ul>
                            <li>普通家庭饮食（小块）</li>
                            <li>可以啃咬的排骨、肉条</li>
                            <li>整颗软烂的蔬菜</li>
                            <li>逐步向成人饮食过渡</li>
                        </ul>
                        
                        <div class="warning-box">
                            <strong>危险食物：</strong>整颗坚果、整颗葡萄、果冻、小糖果等存在窒息风险，3岁前避免食用。
                        </div>
                    `
                },
                {
                    id: "eating-habits",
                    icon: "🍴",
                    title: "饮食习惯培养",
                    content: `
                        <h4>自主进食能力培养</h4>
                        <ul>
                            <li>提供手指食物，鼓励自己吃</li>
                            <li>准备安全的餐具</li>
                            <li>允许宝宝用手抓食物</li>
                            <li>不要因为弄脏而阻止探索</li>
                        </ul>
                        
                        <h4>建立良好饮食习惯</h4>
                        <ul>
                            <li>固定用餐地点和时间</li>
                            <li>坐在餐椅上进食</li>
                            <li>避免追喂、逗喂</li>
                            <li>全家一起用餐，营造氛围</li>
                            <li>控制零食，两餐之间间隔3-4小时</li>
                        </ul>
                        
                        <div class="tip-box">
                            让宝宝决定吃多少，家长负责提供什么。尊重宝宝的食量，不要强迫。
                        </div>
                    `
                },
                {
                    id: "picky-eating",
                    icon: "😋",
                    title: "挑食应对策略",
                    content: `
                        <h4>挑食的正常性</h4>
                        <p>1-2岁是挑食高发期，味觉敏感度增加，抵触新食物是正常现象。</p>
                        
                        <h4>应对方法</h4>
                        <ul>
                            <li><strong>多次尝试</strong>：新食物可能需要尝试10-15次才能接受</li>
                            <li><strong>积极榜样</strong>：家长自己多吃蔬菜</li>
                            <li><strong>趣味呈现</strong>：将食物做成可爱形状</li>
                            <li><strong>参与制作</strong>：让宝宝参与洗菜、摆盘</li>
                            <li><strong>变换搭配</strong>：将不爱吃的蔬菜藏在爱吃的食物里</li>
                        </ul>
                        
                        <div class="warning-box">
                            避免用食物作为奖励或惩罚（如"吃完蔬菜才能吃水果"），这会强化对蔬菜的负面情绪。
                        </div>
                    `
                }
            ]
        },
        "2-3y": {
            title: "2-3岁 · 喂养指南",
            cards: [
                {
                    id: "diet-structure",
                    icon: "🥦",
                    title: "学龄前儿童膳食",
                    content: `
                        <h4>每日食物摄入量</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>食物类别</th>
                                        <th>推荐量</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>谷类</td>
                                        <td>85-100g（生重）</td>
                                    </tr>
                                    <tr>
                                        <td>薯类</td>
                                        <td>适量</td>
                                    </tr>
                                    <tr>
                                        <td>蔬菜</td>
                                        <td>200-250g</td>
                                    </tr>
                                    <tr>
                                        <td>水果</td>
                                        <td>100-150g</td>
                                    </tr>
                                    <tr>
                                        <td>肉禽鱼</td>
                                        <td>50-70g</td>
                                    </tr>
                                    <tr>
                                        <td>蛋类</td>
                                        <td>1个（50g）</td>
                                    </tr>
                                    <tr>
                                        <td>奶类</td>
                                        <td>350-500ml</td>
                                    </tr>
                                    <tr>
                                        <td>大豆</td>
                                        <td>5-15g</td>
                                    </tr>
                                    <tr>
                                        <td>坚果</td>
                                        <td>适量（磨碎）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <p class="source-ref">参考：《中国学龄前儿童膳食指南2022》</p>
                    `
                },
                {
                    id: "family-meals",
                    icon: "👨‍👩‍👧",
                    title: "家庭饮食融入",
                    content: `
                        <h4>与家人共餐</h4>
                        <p>2-3岁可以逐步与家人吃相同的食物，但仍需注意调味和质地。</p>
                        
                        <h4>饮食原则</h4>
                        <ul>
                            <li>少盐少糖，成人饭菜可先盛出再调味</li>
                            <li>食物切成适合幼儿的大小</li>
                            <li>避免辛辣刺激食物</li>
                            <li>继续提供牛奶作为主要钙来源</li>
                        </ul>
                        
                        <h4>每日餐次安排</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>餐次</th>
                                        <th>时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>早餐</td>
                                        <td>7:00-8:00</td>
                                    </tr>
                                    <tr>
                                        <td>上午点心</td>
                                        <td>9:30-10:00</td>
                                    </tr>
                                    <tr>
                                        <td>午餐</td>
                                        <td>11:30-12:30</td>
                                    </tr>
                                    <tr>
                                        <td>下午点心</td>
                                        <td>15:00-15:30</td>
                                    </tr>
                                    <tr>
                                        <td>晚餐</td>
                                        <td>18:00-19:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                },
                {
                    id: "nutrition-focus",
                    icon: "💪",
                    title: "重点营养素关注",
                    content: `
                        <h4>钙</h4>
                        <ul>
                            <li>每日需求：600-800mg</li>
                            <li>来源：奶类、豆腐、绿叶蔬菜、芝麻</li>
                        </ul>
                        
                        <h4>铁</h4>
                        <ul>
                            <li>预防缺铁性贫血</li>
                            <li>来源：红肉、动物肝脏、血制品</li>
                            <li>搭配维生素C促进吸收</li>
                        </ul>
                        
                        <h4>锌</h4>
                        <ul>
                            <li>促进食欲和生长发育</li>
                            <li>来源：海产品、肉类、坚果</li>
                        </ul>
                        
                        <h4>DHA</h4>
                        <ul>
                            <li>促进大脑和视网膜发育</li>
                            <li>来源：深海鱼、藻类、蛋黄</li>
                        </ul>
                        
                        <div class="tip-box">
                            均衡饮食是获取营养的最佳途径，如怀疑缺乏，请在医生指导下补充。
                        </div>
                    `
                },
                {
                    id: "eating-tips",
                    icon: "🌟",
                    title: "饮食小贴士",
                    content: `
                        <h4>培养健康饮食观念</h4>
                        <ul>
                            <li>认识食物的颜色、味道、触感</li>
                            <li>了解食物从哪里来（种植、养殖）</li>
                            <li>珍惜食物，不浪费</li>
                        </ul>
                        
                        <h4>户外活动与饮食</h4>
                        <ul>
                            <li>户外活动后及时补充水分</li>
                            <li>活动量大时可适量增加</li>
                            <li>避免边玩边吃</li>
                        </ul>
                        
                        <h4>节日饮食提醒</h4>
                        <ul>
                            <li>节假日保持规律饮食</li>
                            <li>外出就餐选择适合孩子的菜品</li>
                            <li>避免暴饮暴食</li>
                        </ul>
                    `
                }
            ]
        }
    },

    // ===== 健康频道 =====
    health: {
        "0-1m": {
            title: "0-1月龄 · 健康指南",
            cards: [
                {
                    id: "vaccine-birth",
                    icon: "💉",
                    title: "出生时疫苗 · 乙肝疫苗与卡介苗",
                    content: `
                        <h4>乙肝疫苗（第1剂）</h4>
                        <div class="vaccine-card">
                            <p><strong>接种时间：</strong>出生后24小时内</p>
                            <p><strong>接种部位：</strong>上臂外侧三角肌肌内注射</p>
                            <p><strong>剂量：</strong>10μg或20μg（酵母型）</p>
                        </div>
                        
                        <h4>乙肝疫苗全程程序</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>第1剂 · 出生时</h4>
                                <p>出生24小时内接种，越早越好，可有效阻断母婴传播</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第2剂 · 1月龄</h4>
                                <p>满月后接种，在正规接种单位完成</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第3剂 · 6月龄</h4>
                                <p>完成基础免疫，全程接种后保护率可达95%以上</p>
                            </div>
                        </div>
                        
                        <h4>乙肝疫苗的作用</h4>
                        <p>乙肝疫苗用于预防乙型肝炎病毒（HBV）感染。乙肝是我国重点防控的乙类传染病，可通过母婴、血液和性接触传播。感染后可能发展为慢性肝炎、肝硬化甚至肝癌。</p>
                        
                        <h4>接种禁忌</h4>
                        <ul>
                            <li>已知对乙肝疫苗任何成分过敏者</li>
                            <li>患急性疾病、严重慢性疾病、慢性疾病急性发作期</li>
                            <li>发热者暂缓接种</li>
                        </ul>
                        
                        <h4>接种后反应</h4>
                        <ul>
                            <li>局部红肿、疼痛（一般2-3天自行消退）</li>
                            <li>低热（体温<38.5℃）</li>
                            <li>无需特殊处理，注意观察即可</li>
                        </ul>
                        
                        <h4>卡介苗（BCG）</h4>
                        <div class="vaccine-card">
                            <p><strong>接种时间：</strong>出生后24小时-1个月内</p>
                            <p><strong>接种部位：</strong>上臂外侧三角肌皮内注射</p>
                            <p><strong>剂量：</strong>0.1ml</p>
                        </div>
                        
                        <h4>卡介苗的作用</h4>
                        <p>预防儿童结核性脑膜炎和粟粒性肺结核。结核病通过呼吸道传播，我国是结核病高负担国家，早期接种可为宝宝建立基础防护。</p>
                        
                        <h4>正常接种反应</h4>
                        <div class="warning-box">
                            <strong>这是正常的！</strong>接种后2-4周局部出现红肿→硬结→化脓→破溃→结痂，是卡介苗的正常反应过程，切忌挤压、消毒或包扎，通常6-8周自行愈合。
                        </div>
                        
                        <h4>卡介苗补种原则</h4>
                        <ul>
                            <li>早产儿（体重<2500g）：待体重达标后补种</li>
                            <li>出生时未接种：3月龄内可直接补种</li>
                            <li>超过3月龄：需先做结核菌素试验（PPD）阴性后方可补种</li>
                        </ul>
                        
                        <div class="tip-box">
                            接种后请妥善保管《儿童预防接种证》，这是宝宝入托、入学、出国的必备证件。
                        </div>
                        <p class="source-ref">参考：国家免疫规划疫苗免疫程序（2025版）</p>
                    `
                },
                {
                    id: "milestone",
                    icon: "📊",
                    title: "发育里程碑",
                    content: `
                        <h4>0-1月龄发展特点</h4>
                        
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>领域</th>
                                        <th>典型表现</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>粗大动作</td>
                                        <td>俯卧时能抬头1-2秒；四肢不自主舞动</td>
                                    </tr>
                                    <tr>
                                        <td>精细动作</td>
                                        <td>握拳；触碰掌心会握紧</td>
                                    </tr>
                                    <tr>
                                        <td>视力</td>
                                        <td>能注视20-30cm物体；喜欢黑白图案</td>
                                    </tr>
                                    <tr>
                                        <td>听力</td>
                                        <td>对声音有反应；转头寻找声源</td>
                                    </tr>
                                    <tr>
                                        <td>语言</td>
                                        <td>哭是唯一语言；满月时能发出喉音</td>
                                    </tr>
                                    <tr>
                                        <td>社交</td>
                                        <td>注视人脸；能认出妈妈的声音</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="tip-box">
                            每个宝宝发育节奏不同，存在个体差异，不必过度比较。
                        </div>
                    `
                },
                {
                    id: "fever-care",
                    icon: "🌡️",
                    title: "发热护理",
                    content: `
                        <h4>新生儿体温特点</h4>
                        <p>正常体温：36.5-37.3℃（腋温），测量部位需准确。</p>
                        
                        <h4>何时需要警惕</h4>
                        <div class="warning-box">
                            <strong>⚠️ 38℃以上为发热</strong><br>
                            新生儿发热需特别重视，可能提示严重感染，需立即就医！
                        </div>
                        
                        <h4>家庭处理原则</h4>
                        <ul>
                            <li>松解衣被散热</li>
                            <li>物理降温：温水擦拭额头、腋下、腹股沟</li>
                            <li>补充水分</li>
                            <li><strong>禁止</strong>：自行使用退烧药（需医生指导）</li>
                        </ul>
                        
                        <div class="warning-box">
                            新生儿发热必须就医，不要自行在家处理！
                        </div>
                    `
                },
                {
                    id: "skin-care",
                    icon: "👶",
                    title: "常见皮肤问题",
                    content: `
                        <h4>新生儿毒性红斑</h4>
                        <p>出生后几天内出现，为红色丘疹或脓疱，不需特殊处理。</p>
                        
                        <h4>粟粒疹</h4>
                        <p>鼻尖、额头的小白点，皮脂腺分泌物堆积，2-3周自行消退。</p>
                        
                        <h4>生理性黄疸</h4>
                        <ul>
                            <li>出生后2-3天出现，4-6天达峰</li>
                            <li>多喂母乳/配方奶促进排泄</li>
                            <li>观察黄疸是否消退</li>
                            <li>足月儿14天内消退，早产儿21天内</li>
                        </ul>
                        
                        <div class="warning-box">
                            黄疸出现过早、程度过重、持续不退，需就医排除病理性黄疸。
                        </div>
                    `
                },
                {
                    id: "safety",
                    icon: "🛡️",
                    title: "安全提醒",
                    content: `
                        <h4>睡眠安全</h4>
                        <ul>
                            <li>仰卧位睡眠最安全</li>
                            <li>坚实床垫，无枕头</li>
                            <li>避免过热、过度包裹</li>
                            <li>同房不同床</li>
                        </ul>
                        
                        <h4>喂养安全</h4>
                        <ul>
                            <li>呛奶时侧卧拍背</li>
                            <li>奶孔大小适宜</li>
                            <li>不躺着喂奶</li>
                        </ul>
                        
                        <h4>环境安全</h4>
                        <ul>
                            <li>避免强光直射眼睛</li>
                            <li>避免噪音过大</li>
                            <li>避免二手烟</li>
                        </ul>
                    `
                },
                {
                    id: "weight-monitor",
                    icon: "⚖️",
                    title: "新生儿体重监测",
                    content: `
                        <h4>出生后体重变化</h4>
                        <p>新生儿出生后会出现生理性体重下降，这是正常现象：</p>
                        <ul>
                            <li><strong>下降幅度</strong>：通常为出生体重的7%-10%</li>
                            <li><strong>恢复时间</strong>：7-10天内恢复到出生体重</li>
                            <li><strong>正常增长</strong>：恢复后每天增长约15-30g</li>
                        </ul>
                        
                        <h4>体重监测要点</h4>
                        <ul>
                            <li>每周称重1次，满月体检时重点对比</li>
                            <li>统一条件称重：同一时间（晨起排便后）、同样衣物</li>
                            <li>记录体重变化，观察趋势比单次数值更重要</li>
                        </ul>
                        
                        <h4>需要警惕的信号</h4>
                        <ul>
                            <li>体重下降超过出生体重的10%</li>
                            <li>10天后仍未恢复到出生体重</li>
                            <li>体重持续不增或下降</li>
                        </ul>
                        
                        <div class="tip-box">
                            判断喂养是否充足，体重回升速度 + 每日尿量（≥6片湿尿布）是最直观的指标。
                        </div>
                        <p class="source-ref">参考：《居民体重管理》T/CAS 1200.2—2026 婴幼儿与学龄前儿童部分</p>
                    `
                }
            ]
        },
        "1-3m": {
            title: "1-3月龄 · 健康指南",
            cards: [
                {
                    id: "vaccine-polio-dpt",
                    icon: "💉",
                    title: "脊灰疫苗 · 脊髓灰质炎的克星",
                    content: `
                        <h4>脊髓灰质炎（小儿麻痹症）</h4>
                        <p>是由脊髓灰质炎病毒引起的急性传染病，主要侵犯脊髓前角运动神经元，导致肢体松弛性麻痹，严重者可因呼吸肌麻痹致命。接种疫苗是唯一有效的预防手段。</p>
                        
                        <h4>脊灰疫苗接种程序（2025版）</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>第1剂 · 2月龄</h4>
                                <p>脊灰灭活疫苗（IPV）· 肌内注射</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第2剂 · 3月龄</h4>
                                <p>脊灰灭活疫苗（IPV）· 肌内注射</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第3剂 · 4月龄</h4>
                                <p>脊灰减毒活疫苗（bOPV）· 口服滴剂</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第4剂 · 4周岁</h4>
                                <p>脊灰减毒活疫苗（bOPV）· 口服滴剂</p>
                            </div>
                        </div>
                        
                        <h4>灭活疫苗（IPV）vs 减毒活疫苗（OPV）</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>类型</th>
                                        <th>优点</th>
                                        <th>注意事项</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>IPV（灭活）</td>
                                        <td>安全性高，无疫苗相关麻痹风险</td>
                                        <td>需注射接种</td>
                                    </tr>
                                    <tr>
                                        <td>bOPV（减毒）</td>
                                        <td>口服方便，黏膜免疫好</td>
                                        <td>极罕见疫苗相关麻痹风险（约1/250万）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>接种注意事项</h4>
                        <ul>
                            <li>口服OPV前后30分钟避免进食、饮水</li>
                            <li>口服OPV用凉开水送服，禁用热水</li>
                            <li>接种后30分钟内避免剧烈哭闹、呕吐</li>
                        </ul>
                        
                        <h4>接种后反应</h4>
                        <ul>
                            <li>IPV注射部位红肿、疼痛，一般2-3天消退</li>
                            <li>OPV可能出现轻微腹泻，无需特殊处理</li>
                        </ul>
                        
                        <div class="tip-box">
                            我国已实现无脊髓灰质炎目标，但周边国家仍有流行，保持高接种率才能持续巩固成果。
                        </div>
                    `
                },
                {
                    id: "vaccine-dpt",
                    icon: "💉",
                    title: "百白破疫苗 · 三病同防",
                    content: `
                        <h4>百白破疫苗能预防什么？</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>疾病</th>
                                        <th>危害</th>
                                        <th>传播方式</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>百日咳</strong></td>
                                        <td>剧烈咳嗽，婴儿可致呼吸暂停、肺炎、脑病</td>
                                        <td>飞沫传播</td>
                                    </tr>
                                    <tr>
                                        <td><strong>白喉</strong></td>
                                        <td>咽喉部假膜，阻塞呼吸道，可致窒息</td>
                                        <td>飞沫传播</td>
                                    </tr>
                                    <tr>
                                        <td><strong>破伤风</strong></td>
                                        <td>肌肉强直性痉挛，重者呼吸衰竭</td>
                                        <td>伤口感染</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>百白破疫苗接种程序（2025年新版·5剂次）</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>第1剂 · 2月龄</h4>
                                <p>基础免疫第一针</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第2剂 · 4月龄</h4>
                                <p>基础免疫第二针</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第3剂 · 6月龄</h4>
                                <p>基础免疫第三针</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第4剂 · 18月龄</h4>
                                <p>加强免疫（2025年新增）</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第5剂 · 6周岁</h4>
                                <p>百白破加强针（替代原白破疫苗）</p>
                            </div>
                        </div>
                        
                        <div class="warning-box">
                            <strong>2025年新变化：</strong>百白破疫苗由4剂次调整为5剂次，新增18月龄和6周岁各1剂加强针，进一步巩固儿童防护。
                        </div>
                        
                        <h4>接种后常见反应</h4>
                        <ul>
                            <li>注射部位红肿、硬结（1-2周内常见）</li>
                            <li>低至中等度发热</li>
                            <li>烦躁、哭闹</li>
                        </ul>
                        
                        <h4>接种后护理</h4>
                        <ul>
                            <li>红肿处24小时内冷敷，24小时后热敷</li>
                            <li>多喝水、休息</li>
                            <li>体温>38.5℃可用退热药</li>
                        </ul>
                        
                        <div class="warning-box">
                            注射后出现严重过敏反应（荨麻疹、呼吸困难等）需立即就医。
                        </div>
                        
                        <p class="source-ref">参考：国家免疫规划疫苗免疫程序（2025版）</p>
                    `
                },
                {
                    id: "milestone",
                    icon: "📊",
                    title: "发育里程碑",
                    content: `
                        <h4>1-3月龄发展特点</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>月龄</th>
                                        <th>大运动</th>
                                        <th>精细动作</th>
                                        <th>语言</th>
                                        <th>社交</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1月</td>
                                        <td>俯卧抬头</td>
                                        <td>握拳</td>
                                        <td>喉咙发声</td>
                                        <td>追视人脸</td>
                                    </tr>
                                    <tr>
                                        <td>2月</td>
                                        <td>头稳定</td>
                                        <td>能握住拨浪鼓</td>
                                        <td>咿呀发声</td>
                                        <td>逗引会笑</td>
                                    </tr>
                                    <tr>
                                        <td>3月</td>
                                        <td>俯卧抬头45°</td>
                                        <td>手可以握在一起</td>
                                        <td>咕咕出声</td>
                                        <td>认识妈妈</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="tip-box">
                            宝宝仰卧时喜欢踢腿，这是很好的下肢运动。
                        </div>
                    `
                },
                {
                    id: "colic",
                    icon: "😣",
                    title: "肠绞痛应对",
                    content: `
                        <h4>肠绞痛特点</h4>
                        <ul>
                            <li>3周-3月龄常见</li>
                            <li>每天固定时间哭闹，多在傍晚</li>
                            <li>哭闹剧烈，难以安抚</li>
                            <li>排气或排便后缓解</li>
                        </ul>
                        
                        <h4>缓解方法</h4>
                        <ul>
                            <li><strong>飞机抱</strong>：宝宝俯卧在大人手臂上</li>
                            <li><strong>腹部按摩</strong>：顺时针轻柔按摩</li>
                            <li><strong>温敷</strong>：温热毛巾敷腹部</li>
                            <li><strong>包裹</strong>：适当包裹增加安全感</li>
                            <li><strong>白噪音</strong>：吸尘器、吹风机、收音机杂音</li>
                        </ul>
                        
                        <div class="tip-box">
                            肠绞痛一般3-4月龄自然缓解，不会影响宝宝发育。
                        </div>
                    `
                },
                {
                    id: "rash",
                    icon: "🔴",
                    title: "尿布疹护理",
                    content: `
                        <h4>预防措施</h4>
                        <ul>
                            <li>及时更换尿布，保持干爽</li>
                            <li>选用透气性好的尿布</li>
                            <li>温水清洗，避免湿巾刺激</li>
                            <li>晾晒小屁屁（每天2-3次）</li>
                        </ul>
                        
                        <h4>护理方法</h4>
                        <ul>
                            <li>轻度：护臀膏隔离保护</li>
                            <li>中度：氧化锌软膏</li>
                            <li>严重破皮：就医用药</li>
                        </ul>
                        
                        <div class="warning-box">
                            避免使用爽身粉，粉末可能刺激皮肤或进入呼吸道。
                        </div>
                    `
                },
                {
                    id: "weight-growth",
                    icon: "⚖️",
                    title: "体重增长规律",
                    content: `
                        <h4>正常增长速度</h4>
                        <ul>
                            <li><strong>每周</strong>：约150-200g</li>
                            <li><strong>每天</strong>：约20-30g</li>
                            <li><strong>3个月</strong>：体重约为出生时的2倍</li>
                        </ul>
                        
                        <h4>体重百分位解读</h4>
                        <p>不是越高越好！沿曲线稳定增长比绝对数值更重要。</p>
                        <ul>
                            <li><strong>P3-P97</strong>：正常范围</li>
                            <li><strong>曲线平稳</strong>：说明生长节奏良好</li>
                            <li><strong>跨越2条百分位线</strong>（向上或向下）：需要关注</li>
                            <li><strong>持续低于P3或高于P97</strong>：建议就医评估</li>
                        </ul>
                        
                        <h4>称量建议</h4>
                        <ul>
                            <li>统一条件：同一时间、同一称、同样衣物</li>
                            <li>大人抱着称再减去大人体重，或使用婴儿专用秤</li>
                            <li>每周1次足够，不必每天称</li>
                        </ul>
                        
                        <div class="tip-box">
                            体重曲线是判断宝宝是否健康生长的金标准，比单次称重有意义得多。WHO生长曲线是国际通用标准。
                        </div>
                        <p class="source-ref">参考：《居民体重管理》T/CAS 1200.1~2—2026 + WHO生长标准</p>
                    `
                }
            ]
        },
        "3-6m": {
            title: "3-6月龄 · 健康指南",
            cards: [
                {
                    id: "vaccine-meningitis",
                    icon: "💉",
                    title: "流脑疫苗 · 预防流行性脑脊髓膜炎",
                    content: `
                        <h4>什么是流行性脑脊髓膜炎？</h4>
                        <p>简称"流脑"，是由脑膜炎奈瑟菌引起的急性化脓性脑膜炎。可通过飞沫传播，冬春季高发。6月龄-2岁婴幼儿是高危人群，主要表现为高热、剧烈头痛、喷射性呕吐、皮肤瘀点瘀斑，暴发型可于24小时内危及生命。</p>
                        
                        <h4>流脑疫苗接种程序</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>疫苗类型</th>
                                        <th>接种时间</th>
                                        <th>预防血清群</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A群流脑多糖疫苗</td>
                                        <td>6月龄、9月龄</td>
                                        <td>A群</td>
                                    </tr>
                                    <tr>
                                        <td>A+C群流脑多糖疫苗</td>
                                        <td>3周岁、6周岁</td>
                                        <td>A群、C群</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>2026年新选择：四价流脑结合疫苗</h4>
                        <p>2026年四价流脑结合疫苗扩龄至6岁，可替代传统多糖疫苗，提供更广泛的防护：</p>
                        <ul>
                            <li>覆盖A、C、Y、W135四种血清群</li>
                            <li>结合疫苗免疫效果更持久</li>
                            <li>适合有条件的家庭选择</li>
                        </ul>
                        
                        <h4>接种后反应</h4>
                        <ul>
                            <li>注射部位红肿、疼痛</li>
                            <li>低热、烦躁</li>
                            <li>一般2-3天自行消退</li>
                        </ul>
                        
                        <h4>A群流脑疫苗补种</h4>
                        <ul>
                            <li>两针间隔不少于3个月</li>
                            <li>如错过接种时间，尽早补种</li>
                        </ul>
                        
                        <div class="tip-box">
                            6月龄是宝宝开始接种流脑疫苗的时间，记得按时预约！
                        </div>
                        <p class="source-ref">参考：国家免疫规划疫苗免疫程序（2025版）</p>
                    `
                },
                {
                    id: "vaccine-self-pay",
                    icon: "💰",
                    title: "推荐自费疫苗 · 6月龄起可接种",
                    content: `
                        <h4>为什么要接种自费疫苗？</h4>
                        <p>自费疫苗（非免疫规划疫苗）是免费疫苗的重要补充，能预防更多高发、高危害疾病。随着国家经济发展，越来越多的自费疫苗正在纳入免费范围。</p>
                        
                        <h4>推荐优先接种的自费疫苗</h4>
                        
                        <div class="vaccine-card">
                            <h4>🛡️ 13价肺炎球菌疫苗（PCV13）</h4>
                            <p><strong>接种程序：</strong>2、4、6月龄基础免疫，12-15月龄加强免疫（共4剂）</p>
                            <p><strong>预防疾病：</strong>肺炎球菌引起的肺炎、脑膜炎、中耳炎、菌血症等</p>
                            <p><strong>推荐理由：</strong>WHO最优先推荐的儿童疫苗之一，肺炎是我国5岁以下儿童死亡主要原因</p>
                            <p><strong>费用参考：</strong>约700-800元/剂</p>
                        </div>
                        
                        <div class="vaccine-card">
                            <h4>🦠 EV71手足口病疫苗</h4>
                            <p><strong>接种程序：</strong>6月龄起接种，2剂间隔1个月</p>
                            <p><strong>预防疾病：</strong>EV71病毒引起的手足口病（尤其是重症）</p>
                            <p><strong>推荐理由：</strong>EV71是重症手足口病的主要病原体，接种后可显著降低重症风险</p>
                            <p><strong>费用参考：</strong>约200-300元/剂</p>
                        </div>
                        
                        <div class="vaccine-card">
                            <h4>🦷 轮状病毒疫苗（RV）</h4>
                            <p><strong>接种程序：</strong>6周龄起口服，全程2-3剂（视厂家）</p>
                            <p><strong>预防疾病：</strong>轮状病毒引起的秋季腹泻、呕吐、脱水</p>
                            <p><strong>推荐理由：</strong>轮状病毒感染是婴幼儿急性胃肠炎的主要原因，6月龄-2岁高发</p>
                            <p><strong>费用参考：</strong>约150-300元/剂</p>
                        </div>
                        
                        <div class="vaccine-card">
                            <h4>💉 Hib疫苗（b型流感嗜血杆菌疫苗）</h4>
                            <p><strong>接种程序：</strong>2、4、6月龄基础免疫，12-15月龄加强（共4剂）</p>
                            <p><strong>预防疾病：</strong>Hib引起的肺炎、脑膜炎、会厌炎等</p>
                            <p><strong>推荐理由：</strong>WHO最推荐的疫苗之一，我国抗生素耐药问题严重，预防尤为重要</p>
                            <p><strong>费用参考：</strong>约100-150元/剂</p>
                        </div>
                        
                        <div class="vaccine-card">
                            <h4>💉 五联疫苗（百白破+脊灰+Hib）</h4>
                            <p><strong>接种程序：</strong>2、3、4月龄基础，18月龄加强（共4剂）</p>
                            <p><strong>优势：</strong>一针防五种病，减少8次接种，减少宝宝痛苦</p>
                            <p><strong>适合：</strong>希望减少接种次数的家庭</p>
                            <p><strong>费用参考：</strong>约600-800元/剂</p>
                        </div>
                        
                        <h4>流感疫苗</h4>
                        <p><strong>接种时间：</strong>6月龄起，每年秋季接种</p>
                        <p><strong>接种方案：</strong>首次接种需2剂（间隔4周），之后每年1剂</p>
                        <p><strong>推荐理由：</strong>儿童是流感高危人群，接种流感疫苗可降低重症风险</p>
                        
                        <div class="tip-box">
                            <strong>疫苗选择建议：</strong>根据家庭经济情况和宝宝健康状况选择。国产与进口疫苗安全性和有效性无实质差异，不必盲目追求进口。
                        </div>
                        <p class="source-ref">参考：中国疾控中心、WHO儿童疫苗立场文件</p>
                    `
                },
                {
                    id: "milestone",
                    icon: "📊",
                    title: "发育里程碑",
                    content: `
                        <h4>3-6月龄发展特点</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>月龄</th>
                                        <th>大运动</th>
                                        <th>精细动作</th>
                                        <th>语言</th>
                                        <th>认知</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3-4月</td>
                                        <td>俯卧抬头90°</td>
                                        <td>抓握玩具</td>
                                        <td>咯咯笑出声</td>
                                        <td>认识熟悉的人</td>
                                    </tr>
                                    <tr>
                                        <td>4-5月</td>
                                        <td>翻身</td>
                                        <td>摇铃、拍打</td>
                                        <td>咿呀应答</td>
                                        <td>镜子里的自己</td>
                                    </tr>
                                    <tr>
                                        <td>5-6月</td>
                                        <td>坐（需支撑）</td>
                                        <td>换手、撕纸</td>
                                        <td>发辅音（ma、ba）</td>
                                        <td>分离焦虑开始</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="tip-box">
                            6月龄体检很重要，记得按时参加！
                        </div>
                    `
                },
                {
                    id: "fever-care",
                    icon: "🌡️",
                    title: "发热家庭护理",
                    content: `
                        <h4>发热程度判断</h4>
                        <ul>
                            <li>低热：37.5-38℃</li>
                            <li>中等热：38.1-39℃</li>
                            <li>高热：39.1-41℃</li>
                            <li>超高热：>41℃</li>
                        </ul>
                        
                        <h4>家庭护理</h4>
                        <ul>
                            <li>多补充水分（母乳、配方奶、温开水）</li>
                            <li>适当减少衣物</li>
                            <li>温水擦浴（颈部、腋下、腹股沟）</li>
                            <li>保持室温22-24℃</li>
                            <li>保证休息</li>
                        </ul>
                        
                        <h4>何时就医</h4>
                        <ul>
                            <li>3月龄以下发热</li>
                            <li>体温>39℃</li>
                            <li>反复高热>24小时</li>
                            <li>精神差、拒奶、呼吸急促</li>
                            <li>抽搐、皮疹</li>
                        </ul>
                        
                        <div class="warning-box">
                            退烧药需在医生指导下使用，3月龄以上可用对乙酰氨基酚，6月龄以上可用布洛芬。
                        </div>
                    `
                },
                {
                    id: "eczema",
                    icon: "🩹",
                    title: "湿疹护理",
                    content: `
                        <h4>湿疹特点</h4>
                        <p>婴儿湿疹（特应性皮炎）常见于面部、头皮，严重时蔓延全身，表现为红斑、丘疹、水疱，伴剧烈瘙痒。</p>
                        
                        <h4>护理要点</h4>
                        <ul>
                            <li><strong>皮肤保湿</strong>：这是关键！每日多次涂抹润肤霜</li>
                            <li><strong>合理洗澡</strong>：水温37℃以下，时间5-10分钟</li>
                            <li><strong>衣物选择</strong>：纯棉、透气、无刺激</li>
                            <li><strong>环境控制</strong>：室温22-24℃，湿度50-60%</li>
                            <li><strong>避免刺激</strong>：过热、出汗、摩擦、毛绒玩具</li>
                        </ul>
                        
                        <h4>激素使用</h4>
                        <p>严重时需在医生指导下使用弱效激素，如地奈德乳膏。</p>
                        
                        <div class="tip-box">
                            湿疹无法"根治"，但可以控制。做好保湿是最重要的日常护理。
                        </div>
                    `
                },
                {
                    id: "growth-monitor",
                    icon: "⚖️",
                    title: "生长监测与评估",
                    content: `
                        <h4>综合评估三指标</h4>
                        <p>体重、身长、头围三项指标综合看，不能只盯体重。</p>
                        <ul>
                            <li><strong>体重/身长比值</strong>：比单纯体重更有参考价值</li>
                            <li><strong>6个月体重</strong>：约为出生时的2倍</li>
                        </ul>
                        
                        <h4>体重偏离判定</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>情况</th>
                                        <th>信号</th>
                                        <th>建议</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>体重过低</td>
                                        <td>连续2个月不增或下降；曲线向下穿越2条主百分位线</td>
                                        <td>就医排查喂养或疾病问题</td>
                                    </tr>
                                    <tr>
                                        <td>体重过高</td>
                                        <td>体重增长速度明显快于身长增长；曲线持续上攀</td>
                                        <td>调整食物结构，增加活动量</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>辅食添加期体重管理</h4>
                        <ul>
                            <li>体重偏低的宝宝：优先保证奶量，辅食不替代奶</li>
                            <li>添加辅食不加盐糖、不喂果汁，以铁强化米粉为首选</li>
                            <li>6月龄后奶量仍需600-800ml/天</li>
                        </ul>
                        
                        <div class="tip-box">
                            辅食添加初期，有些宝宝体重增长会短暂放缓，只要沿曲线稳定增长就不必焦虑。
                        </div>
                        <p class="source-ref">参考：《居民体重管理》T/CAS 1200.2—2026 婴幼儿与学龄前儿童部分</p>
                    `
                }
            ]
        },
        "6-12m": {
            title: "6-12月龄 · 健康指南",
            cards: [
                {
                    id: "vaccine",
                    icon: "💉",
                    title: "疫苗接种时间表",
                    content: `
                        <h4>6-12月龄接种疫苗</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>月龄</th>
                                        <th>疫苗</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>6月龄</td>
                                        <td>乙肝（第3剂）+ A群流脑（第1剂，间隔3个月接种第2剂）</td>
                                    </tr>
                                    <tr>
                                        <td>8月龄</td>
                                        <td>麻腮风（第1剂）+ 乙脑减毒（第1剂）</td>
                                    </tr>
                                    <tr>
                                        <td>9月龄</td>
                                        <td>A群流脑（第2剂）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>手足口病疫苗</h4>
                        <p>6月龄以上可接种EV71手足口病疫苗。</p>
                        
                        <div class="tip-box">
                            宝宝开始爬行后，接触外界增多，按时接种疫苗很重要！
                        </div>
                    `
                },
                {
                    id: "milestone",
                    icon: "📊",
                    title: "发育里程碑",
                    content: `
                        <h4>6-12月龄发展特点</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>月龄</th>
                                        <th>大运动</th>
                                        <th>精细动作</th>
                                        <th>语言</th>
                                        <th>社交</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>6-7月</td>
                                        <td>独坐</td>
                                        <td>换手、撕纸</td>
                                        <td>无意识发音</td>
                                        <td>认生</td>
                                    </tr>
                                    <tr>
                                        <td>7-9月</td>
                                        <td>爬行</td>
                                        <td>拇指食指捏取</td>
                                        <td>咿呀学语</td>
                                        <td>会拍手、再见</td>
                                    </tr>
                                    <tr>
                                        <td>9-12月</td>
                                        <td>扶站、扶走</td>
                                        <td>搭积木、翻书</td>
                                        <td>有意识叫"爸妈"</td>
                                        <td>怕生、粘人</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                },
                {
                    id: "diarrhea",
                    icon: "💧",
                    title: "腹泻护理",
                    content: `
                        <h4>腹泻常见原因</h4>
                        <ul>
                            <li>病毒感染（轮状病毒、诺如病毒）</li>
                            <li>细菌感染</li>
                            <li>食物不耐受/过敏</li>
                            <li>抗生素相关</li>
                        </ul>
                        
                        <h4>家庭护理</h4>
                        <ul>
                            <li><strong>补液</strong>：ORS口服补液盐或米汤加盐</li>
                            <li><strong>继续喂养</strong>：不要禁食，母乳喂养继续</li>
                            <li><strong>补锌</strong>：缩短病程</li>
                            <li><strong>观察</strong>：尿量、精神状态</li>
                        </ul>
                        
                        <h4>何时就医</h4>
                        <ul>
                            <li>大便带血</li>
                            <li>高热不退</li>
                            <li>精神差、嗜睡</li>
                            <li>眼窝凹陷、皮肤干燥（脱水）</li>
                            <li>无法进食</li>
                        </ul>
                        
                        <div class="tip-box">
                            腹泻期间注意臀部护理，每次便后清洗，涂抹护臀膏预防尿布疹。
                        </div>
                    `
                },
                {
                    id: "first-aid",
                    icon: "🚑",
                    title: "异物窒息急救",
                    content: `
                        <h4>高危年龄段</h4>
                        <p>6-12月龄开始爬行探索，异物风险增加。</p>
                        
                        <h4>海姆立克急救法（<1岁）</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>第一步：背部拍击</h4>
                                <p>宝宝面朝下趴在大人腿上，头部低于躯干。一手托住头颈部，另一手掌根拍两肩胛骨中间5次。</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第二步：胸部冲击</h4>
                                <p>翻转宝宝，仰卧在大人腿上。一手托住头颈，另一手食指中指按压两乳头连线中点下方5次。</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第三步：检查口腔</h4>
                                <p>查看有无异物吐出，若未吐出，重复以上步骤。</p>
                            </div>
                        </div>
                        
                        <div class="warning-box">
                            同时拨打120急救！即使异物排出，也需就医检查。
                        </div>
                        <p class="source-ref">参考：美国心脏协会（AHA）急救指南</p>
                    `
                },
                {
                    id: "burns",
                    icon: "🔥",
                    title: "烫伤处理",
                    content: `
                        <h4>烫伤预防</h4>
                        <ul>
                            <li>不要一手抱孩子一手端热食</li>
                            <li>热水壶放在高处</li>
                            <li>浴盆先放凉水再放热水</li>
                            <li>厨房安装安全门</li>
                        </ul>
                        
                        <h4>烫伤处理五步法</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>冲</h4>
                                <p>流动冷水冲洗15-20分钟</p>
                            </div>
                            <div class="timeline-item">
                                <h4>脱</h4>
                                <p>小心脱去伤处衣物，粘连处剪开</p>
                            </div>
                            <div class="timeline-item">
                                <h4>泡</h4>
                                <p>浸泡在冷水中缓解疼痛</p>
                            </div>
                            <div class="timeline-item">
                                <h4>盖</h4>
                                <p>用干净纱布轻轻覆盖</p>
                            </div>
                            <div class="timeline-item">
                                <h4>送</h4>
                                <p>及时送医</p>
                            </div>
                        </div>
                        
                        <div class="warning-box">
                            <strong>禁止：</strong>涂抹牙膏、酱油、面粉等！不要撕破水泡！
                        </div>
                    `
                },
                {
                    id: "fall-prevention",
                    icon: "⚠️",
                    title: "坠落防护",
                    content: `
                        <h4>高发场景</h4>
                        <ul>
                            <li>换尿布时从尿布台坠落</li>
                            <li>从床上翻滚下来</li>
                            <li>学站时失去平衡</li>
                            <li>楼梯坠落</li>
                        </ul>
                        
                        <h4>预防措施</h4>
                        <ul>
                            <li>换尿布时始终有一只手护住宝宝</li>
                            <li>尿布台安装安全带</li>
                            <li>床安装护栏，缝隙<6cm</li>
                            <li>学爬学站时在地面铺软垫</li>
                            <li>楼梯安装安全门</li>
                            <li>窗户安装防护栏</li>
                        </ul>
                        
                        <h4>坠落伤观察</h4>
                        <ul>
                            <li>观察48小时内有无异常</li>
                            <li>关注：精神状态、呕吐、抽搐、意识</li>
                            <li>如有异常立即就医</li>
                        </ul>
                    `
                },
                {
                    id: "weight-mgmt-6-12m",
                    icon: "⚖️",
                    title: "6-12月龄体重管理",
                    content: `
                        <h4>体重增长规律</h4>
                        <p>6-12月体重增长放缓是正常现象，全年约增重1.5-2.5kg，1岁时体重约为出生时的3倍。</p>
                        
                        <h4>超重/肥胖判定</h4>
                        <ul>
                            <li><strong>WHO标准</strong>：体重/身长 > P97 提示可能超重</li>
                            <li>需结合身长综合判断，矮胖vs高壮意义不同</li>
                            <li>不可仅凭"看起来胖"做判断</li>
                        </ul>
                        
                        <h4>体重管理干预原则</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>1. 不限制总量，调整结构</h4>
                                <p>重点调整食物结构而非减少食量——保证奶量600-800ml/天，减少高糖高脂辅食</p>
                            </div>
                            <div class="timeline-item">
                                <h4>2. 减少加工食品</h4>
                                <p>避免果汁、饼干、薯泥等加工辅食，选择天然食材自制辅食</p>
                            </div>
                            <div class="timeline-item">
                                <h4>3. 自主进食</h4>
                                <p>让宝宝自己决定吃多少，不强迫进食、不用食物安抚情绪</p>
                            </div>
                            <div class="timeline-item">
                                <h4>4. 保证活动量</h4>
                                <p>鼓励俯卧、爬行、扶站等活动，减少久坐时间（如婴儿座椅、推车）</p>
                            </div>
                        </div>
                        
                        <h4>饮食行为管理</h4>
                        <ul>
                            <li>每日食物种类目标≥12种（逐步实现）</li>
                            <li>减少含糖饮料（包括果汁），白水为最佳饮品</li>
                            <li>家庭进餐氛围：固定时间、固定位置、减少干扰</li>
                        </ul>
                        
                        <div class="tip-box">
                            婴幼儿体重管理绝不等于"少吃"，而是"吃对"。6-12月是饮食习惯养成的关键窗口期。
                        </div>
                        <p class="source-ref">参考：《居民体重管理》T/CAS 1200.2—2026 + 《中国肥胖行为与生活方式干预指南(2026)》</p>
                    `
                }
            ]
        },
        "1-2y": {
            title: "1-2岁 · 健康指南",
            cards: [
                {
                    id: "vaccine-measles-je",
                    icon: "💉",
                    title: "麻腮风疫苗 · 乙脑疫苗",
                    content: `
                        <h4>麻腮风疫苗（MMR）· 一针防三病</h4>
                        <p>麻腮风疫苗可同时预防麻疹、流行性腮腺炎和风疹三种传染病。</p>
                        
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>疾病</th>
                                        <th>主要症状</th>
                                        <th>危害</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>麻疹</strong></td>
                                        <td>高热、咳嗽、眼结膜炎、全身红疹</td>
                                        <td>可并发肺炎、脑炎，重症可致死亡</td>
                                    </tr>
                                    <tr>
                                        <td><strong>流行性腮腺炎</strong></td>
                                        <td>腮腺肿大、疼痛、发热</td>
                                        <td>可并发睾丸炎、脑膜炎、耳聋</td>
                                    </tr>
                                    <tr>
                                        <td><strong>风疹</strong></td>
                                        <td>低热、淋巴结肿大、全身红疹</td>
                                        <td>孕妇感染可致胎儿畸形</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>麻腮风疫苗接种程序</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>第1剂 · 8月龄</h4>
                                <p>满8月龄后尽早接种</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第2剂 · 18月龄</h4>
                                <p>麻腮风加强针</p>
                            </div>
                        </div>
                        
                        <h4>接种后常见反应</h4>
                        <div class="warning-box">
                            <strong>重点关注：</strong>麻腮风疫苗是所有疫苗中反应较大的，通常在接种后7-12天出现发热、皮疹，持续1-2天。这是正常反应，不代表接种失败。
                        </div>
                        <ul>
                            <li>发热（多在接种后7-12天）</li>
                            <li>皮疹（散在淡红色丘疹）</li>
                            <li>腮腺肿大（少见）</li>
                            <li>注射部位红肿</li>
                        </ul>
                        
                        <h4>乙脑疫苗（JEV）· 预防流行性乙型脑炎</h4>
                        <p>乙脑是由乙型脑炎病毒引起的脑实质炎症，通过蚊虫叮咬传播，夏秋季高发，可导致高热、意识障碍、抽搐，重症可留后遗症。</p>
                        
                        <h4>乙脑疫苗接种程序</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>第1剂 · 8月龄</h4>
                                <p>乙脑减毒活疫苗（JE-L）</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第2剂 · 2周岁</h4>
                                <p>乙脑减毒活疫苗加强</p>
                            </div>
                        </div>
                        
                        <h4>乙脑疫苗选择</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>类型</th>
                                        <th>接种程序</th>
                                        <th>特点</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>乙脑减毒活疫苗</td>
                                        <td>8月龄、2岁各1剂</td>
                                        <td>免费，只需2剂，免疫效果好</td>
                                    </tr>
                                    <tr>
                                        <td>乙脑灭活疫苗</td>
                                        <td>8月龄2剂、2岁1剂、6岁1剂</td>
                                        <td>共4剂，适合禁忌症儿童</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="tip-box">
                            8月龄是疫苗接种密集期，记得同时预约麻腮风和乙脑疫苗！
                        </div>
                        <p class="source-ref">参考：国家免疫规划疫苗免疫程序（2025版）</p>
                    `
                },
                {
                    id: "milestone",
                    icon: "📊",
                    title: "发育里程碑",
                    content: `
                        <h4>1-2岁发展特点</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>领域</th>
                                        <th>1-1.5岁</th>
                                        <th>1.5-2岁</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>大运动</td>
                                        <td>独走、蹲下站起</td>
                                        <td>跑、踢球、跳</td>
                                    </tr>
                                    <tr>
                                        <td>精细动作</td>
                                        <td>搭积木2-3块</td>
                                        <td>搭积木4-6块、握笔涂鸦</td>
                                    </tr>
                                    <tr>
                                        <td>语言</td>
                                        <td>会说10-20个词</td>
                                        <td>说短句、50+词汇</td>
                                    </tr>
                                    <tr>
                                        <td>认知</td>
                                        <td>指认身体部位</td>
                                        <td>认识颜色、形状</td>
                                    </tr>
                                    <tr>
                                        <td>社交</td>
                                        <td>模仿动作</td>
                                        <td>玩过家家、平行游戏</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="tip-box">
                            18月龄体检重点关注语言发育，如有落后需及时干预。
                        </div>
                    `
                },
                {
                    id: "fever-care",
                    icon: "🌡️",
                    title: "发热护理进阶",
                    content: `
                        <h4>退烧药使用</h4>
                        <p>体温>38.5℃或孩子明显不舒服时使用。</p>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>药物</th>
                                        <th>适用年龄</th>
                                        <th>剂量</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>对乙酰氨基酚</td>
                                        <td>>3月龄</td>
                                        <td>10-15mg/kg/次</td>
                                    </tr>
                                    <tr>
                                        <td>布洛芬</td>
                                        <td>>6月龄</td>
                                        <td>5-10mg/kg/次</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>注意事项</h4>
                        <ul>
                            <li>两次间隔至少4-6小时</li>
                            <li>24小时不超过4次</li>
                            <li>不交替使用退烧药</li>
                            <li>仔细阅读说明书，按体重计算剂量</li>
                        </ul>
                        
                        <div class="warning-box">
                            蚕豆病（G6PD缺乏）禁用布洛芬，需提前告知医生。
                        </div>
                    `
                },
                {
                    id: "common-illness",
                    icon: "🤒",
                    title: "常见病护理",
                    content: `
                        <h4>感冒</h4>
                        <ul>
                            <li>多为病毒感染，无特效药</li>
                            <li>对症护理为主</li>
                            <li>鼻塞可用生理盐水滴鼻</li>
                            <li>咳嗽不影响睡眠不需特殊处理</li>
                        </ul>
                        
                        <h4>幼儿急疹</h4>
                        <ul>
                            <li>6月-2岁常见</li>
                            <li>持续高热3-5天</li>
                            <li>热退后出疹</li>
                            <li>皮疹自愈，无需特殊处理</li>
                        </ul>
                        
                        <h4>手足口病</h4>
                        <ul>
                            <li>口腔疱疹、手足皮疹</li>
                            <li>对症治疗，注意口腔清洁</li>
                            <li>居家隔离2周</li>
                            <li>重症及时就医</li>
                        </ul>
                    `
                },
                {
                    id: "first-aid",
                    icon: "🚑",
                    title: "安全急救",
                    content: `
                        <h4>误食异物</h4>
                        <ul>
                            <li>不要自行催吐</li>
                            <li>尖锐物品立即就医</li>
                            <li>观察大便有无排出</li>
                        </ul>
                        
                        <h4>跌落伤</h4>
                        <ul>
                            <li>观察48小时</li>
                            <li>头部外伤需特别关注</li>
                            <li>呕吐、抽搐、意识改变立即就医</li>
                        </ul>
                        
                        <h4>动物咬伤</h4>
                        <ul>
                            <li>肥皂水冲洗15分钟</li>
                            <li>碘伏消毒</li>
                            <li>及时就医接种狂犬疫苗</li>
                        </ul>
                        
                        <div class="tip-box">
                            建议家长学习基础急救技能，可参加当地的红十字会急救培训。
                        </div>
                    `
                },
                {
                    id: "weight-mgmt-1-2y",
                    icon: "⚖️",
                    title: "1-2岁体重管理",
                    content: `
                        <h4>体重增长规律</h4>
                        <p>1-2岁体重增长继续放缓，全年约增重2-2.5kg。这是体重管理习惯养成的关键期。</p>
                        
                        <h4>超重/肥胖判定</h4>
                        <ul>
                            <li><strong>BMI-for-age</strong>：> P85 提示超重，> P97 提示肥胖</li>
                            <li>也可用体重/身长 > P97 作为参考</li>
                        </ul>
                        
                        <h4>体重管理核心策略</h4>
                        
                        <h4>膳食管理</h4>
                        <ul>
                            <li>每日食物种类≥12种，每周≥25种</li>
                            <li>营养素分配：蛋白质15%-20%、脂肪20%-30%、碳水50%-60%</li>
                            <li>减少含糖饮料和加工食品</li>
                            <li>不将食物作为奖励或惩罚</li>
                        </ul>
                        
                        <h4>运动行为</h4>
                        <ul>
                            <li>每日≥60分钟中高强度身体活动</li>
                            <li>2岁以下尽量0屏幕时间</li>
                            <li>鼓励户外活动、自由玩耍</li>
                        </ul>
                        
                        <h4>睡眠行为</h4>
                        <ul>
                            <li>推荐睡眠时长10-13小时/天（含午睡）</li>
                            <li>睡眠不足与肥胖风险显著相关</li>
                        </ul>
                        
                        <h4>家庭支持</h4>
                        <ul>
                            <li>家长以身作则，全家共同进餐</li>
                            <li>营造健康饮食环境，家中少备零食</li>
                            <li>用陪伴替代食物安抚</li>
                        </ul>
                        
                        <h4>体重过低怎么办</h4>
                        <ul>
                            <li>排除疾病因素（消化吸收问题、过敏等）</li>
                            <li>增加营养密度高的食物（牛油果、全蛋、坚果酱等）</li>
                            <li>少食多餐，正餐间安排2-3次健康加餐</li>
                            <li>避免因追喂造成进食压力</li>
                        </ul>
                        
                        <div class="tip-box">
                            1-2岁是口味偏好和饮食习惯形成的关键期，这个阶段建立的饮食模式会持续影响孩子一生。
                        </div>
                        <p class="source-ref">参考：《居民体重管理》T/CAS 1200.2—2026 + 《中国肥胖行为与生活方式干预指南(2026)》</p>
                    `
                }
            ]
        },
        "2-3y": {
            title: "2-3岁 · 健康指南",
            cards: [
                {
                    id: "vaccine-preschool",
                    icon: "💉",
                    title: "入园前疫苗 · 完整接种清单",
                    content: `
                        <h4>2-3岁疫苗接种</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>年龄</th>
                                        <th>疫苗</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>2岁</td><td>甲肝灭活疫苗（第2剂）、乙脑疫苗（第2剂）</td></tr>
                                    <tr><td>3岁</td><td>A+C群流脑多糖疫苗（第1剂）</td></tr>
                                    <tr><td>4岁</td><td>脊灰减毒活疫苗（加强）、水痘疫苗（第2剂）</td></tr>
                                    <tr><td>6岁</td><td>百白破（第5剂）、A+C群流脑多糖（第2剂）</td></tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>流感疫苗每年接种</h4>
                        <p>每年秋季（9-11月）接种流感疫苗，6月龄-8岁首次接种需2剂（间隔4周），之后每年1剂。</p>
                        
                        <h4>入园入学查验接种证</h4>
                        <div class="warning-box">
                            <strong>重要提醒：</strong>根据国家规定，儿童在入托、入园、入学时，托幼机构和学校需查验预防接种证。如有漏种疫苗，需补种后才能入学。
                        </div>
                        
                        <h4>入园前请确认完成以下疫苗</h4>
                        <ul>
                            <li>✅ 乙肝疫苗（3剂）</li>
                            <li>✅ 卡介苗（1剂）</li>
                            <li>✅ 脊灰疫苗（4剂）</li>
                            <li>✅ 百白破疫苗（4剂）</li>
                            <li>✅ 麻腮风疫苗（2剂）</li>
                            <li>✅ A群流脑疫苗（2剂）</li>
                            <li>✅ 乙脑疫苗（2剂）</li>
                            <li>✅ 甲肝疫苗（1剂）</li>
                        </ul>
                        
                        <h4>如需补种怎么办</h4>
                        <ul>
                            <li>带上预防接种证到社区卫生服务中心</li>
                            <li>医生会根据情况安排补种</li>
                            <li>漏种疫苗不影响已接种疫苗的效果</li>
                            <li>尽快补种，拖延太久可能影响入园入学</li>
                        </ul>
                        
                        <div class="tip-box">
                            妥善保管预防接种证！外借、丢失都会造成麻烦。有些地方提供电子接种证，可在"小豆苗"等APP上关联。
                        </div>
                        <p class="source-ref">参考：国家免疫规划疫苗免疫程序（2025版）、《疫苗流通和接种管理条例》</p>
                    `
                },
                {
                    id: "milestone",
                    icon: "📊",
                    title: "发育里程碑",
                    content: `
                        <h4>2-3岁发展特点</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>领域</th>
                                        <th>2-2.5岁</th>
                                        <th>2.5-3岁</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>大运动</td>
                                        <td>双脚跳、上下楼梯</td>
                                        <td>单脚站、骑三轮车</td>
                                    </tr>
                                    <tr>
                                        <td>精细动作</td>
                                        <td>串珠子、折纸</td>
                                        <td>画圆圈、用剪刀</td>
                                    </tr>
                                    <tr>
                                        <td>语言</td>
                                        <td>说3-5字短句</td>
                                        <td>说完整句子、唱歌</td>
                                    </tr>
                                    <tr>
                                        <td>认知</td>
                                        <td>认识大小、颜色</td>
                                        <td>数数1-10、认识性别</td>
                                    </tr>
                                    <tr>
                                        <td>社交</td>
                                        <td>玩合作游戏</td>
                                        <td>结交朋友、角色扮演</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                },
                {
                    id: "dental",
                    icon: "🦷",
                    title: "口腔健康",
                    content: `
                        <h4>乳牙萌出时间</h4>
                        <p>2-3岁20颗乳牙应全部萌出。</p>
                        <ul>
                            <li>2岁左右基本出齐</li>
                            <li>最晚3岁前20颗乳牙</li>
                        </ul>
                        
                        <h4>口腔护理</h4>
                        <ul>
                            <li>每天刷牙2次</li>
                            <li>使用儿童含氟牙膏（米粒大小）</li>
                            <li>家长帮助刷牙至6-7岁</li>
                            <li>减少甜食摄入</li>
                        </ul>
                        
                        <h4>龋齿预防</h4>
                        <ul>
                            <li>定期口腔检查（每半年）</li>
                            <li>涂氟保护漆</li>
                            <li>窝沟封闭（3-4岁）</li>
                        </ul>
                        
                        <div class="tip-box">
                            乳牙蛀了也要治疗！乳牙健康关系到恒牙发育。
                        </div>
                    `
                },
                {
                    id: "vision",
                    icon: "👁️",
                    title: "视力保护",
                    content: `
                        <h4>视力发育</h4>
                        <p>3岁时视力应达到0.5-0.6，可配合视力表检查。</p>
                        
                        <h4>视力保护要点</h4>
                        <ul>
                            <li>每天户外活动2小时以上</li>
                            <li>减少电子产品使用</li>
                            <li>近距离用眼每20分钟休息</li>
                            <li>充足光照下阅读</li>
                        </ul>
                        
                        <h4>警惕信号</h4>
                        <ul>
                            <li>眯眼、揉眼</li>
                            <li>歪头看电视</li>
                            <li>眼球不正（斜视）</li>
                            <li>强光下单眼瞳孔发白</li>
                        </ul>
                        
                        <div class="warning-box">
                            3岁建议进行第一次正规视力检查，之后每半年复查。
                        </div>
                    `
                },
                {
                    id: "common-illness",
                    icon: "🤧",
                    title: "常见病预防",
                    content: `
                        <h4>呼吸道疾病预防</h4>
                        <ul>
                            <li>勤洗手，正确洗手方法</li>
                            <li>避免人群密集场所</li>
                            <li>保持室内通风</li>
                            <li>规律作息，增强体质</li>
                        </ul>
                        
                        <h4>过敏性疾病</h4>
                        <p>2-3岁是过敏性鼻炎、哮喘高发期。</p>
                        <ul>
                            <li>远离已知过敏原</li>
                            <li>保持家居清洁</li>
                            <li>及时就医，规范治疗</li>
                        </ul>
                        
                        <h4>入园健康准备</h4>
                        <ul>
                            <li>完成入园体检</li>
                            <li>疫苗接种证明</li>
                            <li>教会基本表达（我要喝水、不舒服）</li>
                        </ul>
                    `
                },
                {
                    id: "weight-mgmt-2-3y",
                    icon: "⚖️",
                    title: "2-3岁体重管理",
                    content: `
                        <h4>体重增长规律</h4>
                        <p>2-3岁全年增重约2kg，身高增长约7-8cm。BMI开始有参考意义，但需结合体型综合判断。</p>
                        
                        <h4>超重/肥胖干预重点</h4>
                        
                        <h4>膳食管理</h4>
                        <ul>
                            <li>严格限制含糖饮料（包括100%果汁，不超过120ml/天）</li>
                            <li>减少加工食品和超加工零食</li>
                            <li>增加蔬菜水果摄入，保证膳食纤维</li>
                            <li>每日食物种类≥12种，每周≥25种</li>
                        </ul>
                        
                        <h4>运动行为</h4>
                        <ul>
                            <li>每日≥60分钟中高强度活动</li>
                            <li>每周≥3天抗阻活动（攀爬、跳跃等）</li>
                            <li>视屏时间<1小时/天</li>
                            <li>多参与户外集体活动</li>
                        </ul>
                        
                        <h4>睡眠行为</h4>
                        <ul>
                            <li>推荐睡眠时长10-13小时/天</li>
                            <li>建立规律作息，固定就寝时间</li>
                        </ul>
                        
                        <h4>心理行为</h4>
                        <ul>
                            <li>不以体型评价孩子，避免"胖/瘦"标签</li>
                            <li>关注行为而非体重数字</li>
                            <li>建立积极身体意象</li>
                        </ul>
                        
                        <h4>何时需要就医</h4>
                        <ul>
                            <li>BMI持续>P97</li>
                            <li>体重增长速度远超身高增长</li>
                            <li>出现黑棘皮征（颈部/腋下皮肤发黑，可能提示胰岛素抵抗）</li>
                            <li>有家族性早发肥胖或糖尿病史</li>
                        </ul>
                        
                        <div class="tip-box">
                            2-3岁是为学龄期健康体重打基础的关键期，家庭环境是最重要的影响因素。家长的饮食和运动习惯，直接影响孩子。
                        </div>
                        <p class="source-ref">参考：《居民体重管理》T/CAS 1200.2/1200.7—2026 + 《中国肥胖行为与生活方式干预指南(2026)》</p>
                    `
                }
            ]
        }
    },

    // ===== 早教频道 =====
    education: {
        "0-1m": {
            title: "0-1月龄 · 早教指南",
            cards: [
                {
                    id: "sensory",
                    icon: "👁️",
                    title: "感官刺激",
                    content: `
                        <h4>视觉刺激</h4>
                        <ul>
                            <li>距离20-30cm处与宝宝对视</li>
                            <li>使用黑白对比卡片（靶心图、条纹图）</li>
                            <li>缓慢移动物体，训练追视</li>
                            <li>镜子游戏：看自己的脸</li>
                        </ul>
                        
                        <h4>听觉刺激</h4>
                        <ul>
                            <li>多与宝宝说话、唱歌</li>
                            <li>轻柔音乐、摇篮曲</li>
                            <li>摇铃、拨浪鼓等发声玩具</li>
                            <li>避免噪音，但不要过于安静</li>
                        </ul>
                        
                        <h4>触觉刺激</h4>
                        <ul>
                            <li>袋鼠式护理（皮肤接触）</li>
                            <li>抚触按摩全身</li>
                            <li>不同材质的布料触碰手脚</li>
                        </ul>
                        
                        <div class="tip-box">
                            早教的核心是"回应"，及时回应宝宝的需求和声音。
                        </div>
                    `
                },
                {
                    id: "games",
                    icon: "🎮",
                    title: "适合的游戏",
                    content: `
                        <h4>追视训练</h4>
                        <p>宝宝仰卧，在其视线范围内缓慢移动红球或黑白卡片。</p>
                        
                        <h4>寻声训练</h4>
                        <p>在宝宝耳旁轻摇摇铃，引导宝宝转头寻找声源。</p>
                        
                        <h4>趴趴时间</h4>
                        <p>每天2-3次趴卧练习，每次1-2分钟，锻炼抬头。</p>
                        
                        <h4>亲子对话</h4>
                        <p>模仿宝宝的声音和表情，进行"对话"互动。</p>
                        
                        <div class="tip-box">
                            每次游戏时间不宜过长，5-10分钟即可，注意观察宝宝疲劳信号。
                        </div>
                    `
                },
                {
                    id: "bonding",
                    icon: "❤️",
                    title: "亲子联结",
                    content: `
                        <h4>建立安全感</h4>
                        <ul>
                            <li>及时回应哭声</li>
                            <li>温柔的拥抱和抚摸</li>
                            <li>眼神交流</li>
                            <li>哺乳时的肌肤接触</li>
                        </ul>
                        
                        <h4>情绪感知</h4>
                        <p>宝宝能感知家长的情绪，家长的平静是给宝宝最好的礼物。</p>
                        
                        <h4>爸爸参与</h4>
                        <ul>
                            <li>换尿布、拍嗝</li>
                            <li>抚触按摩</li>
                            <li>读绘本、讲故事</li>
                            <li>户外活动</li>
                        </ul>
                    `
                }
            ]
        },
        "1-3m": {
            title: "1-3月龄 · 早教指南",
            cards: [
                {
                    id: "milestone",
                    icon: "🎯",
                    title: "发展游戏推荐",
                    content: `
                        <h4>1-2月龄游戏</h4>
                        <ul>
                            <li><strong>抬头练习</strong>：俯卧位，用玩具引导抬头</li>
                            <li><strong>抓握游戏</strong>：放入摇铃，锻炼抓握</li>
                            <li><strong>追视升级</strong>：移动红球，引导视线追踪</li>
                        </ul>
                        
                        <h4>2-3月龄游戏</h4>
                        <ul>
                            <li><strong>翻身预备</strong>：侧卧位，用玩具引导翻身</li>
                            <li><strong>手眼协调</strong>：双手在胸前玩耍</li>
                            <li><strong>语言回应</strong>：模仿宝宝发音，引导"咿呀对话"</li>
                            <li><strong>社交微笑</strong>：藏猫猫、逗笑游戏</li>
                        </ul>
                        
                        <div class="tip-box">
                            趴着玩（tummy time）是这个阶段最重要的运动练习！
                        </div>
                    `
                },
                {
                    id: "language",
                    icon: "🗣️",
                    title: "语言启蒙",
                    content: `
                        <h4>语言输入</h4>
                        <ul>
                            <li>每天多和宝宝说话</li>
                            <li>描述正在做的事情</li>
                            <li>唱歌、念儿歌</li>
                            <li>叫宝宝的名字</li>
                        </ul>
                        
                        <h4>回应练习</h4>
                        <ul>
                            <li>宝宝发音时给予回应</li>
                            <li>模仿宝宝的声音</li>
                            <li>等待宝宝"说话"再回应</li>
                            <li>夸张的表情和语调</li>
                        </ul>
                        
                        <h4>推荐儿歌</h4>
                        <p>《小星星》《两只老虎》《小白兔白又白》等简单重复的旋律。</p>
                    `
                },
                {
                    id: "motor",
                    icon: "👐",
                    title: "精细动作训练",
                    content: `
                        <h4>手部发展</h4>
                        <p>1-2月：握拳状态<br>
                        2-3月：逐渐松开，开始吃手</p>
                        
                        <h4>训练活动</h4>
                        <ul>
                            <li><strong>抓握练习</strong>：不同质地的玩具刺激手心</li>
                            <li><strong>手部按摩</strong>：轻轻掰动手指</li>
                            <li><strong>摇铃游戏</strong>：握住后摇晃</li>
                            <li><strong>吃手</strong>：允许，这是发展的一部分</li>
                        </ul>
                        
                        <div class="warning-box">
                            不需要阻止宝宝吃手，这是探索世界的方式，保持手部清洁即可。
                        </div>
                    `
                },
                {
                    id: "emotion",
                    icon: "😊",
                    title: "情绪社交",
                    content: `
                        <h4>社会性微笑</h4>
                        <p>2月龄左右，宝宝开始出现社会性微笑，会主动对人笑。</p>
                        
                        <h4>亲子互动</h4>
                        <ul>
                            <li>每天高质量陪伴</li>
                            <li>与宝宝面对面交流</li>
                            <li>夸张的表情变化</li>
                            <li>温柔的语调</li>
                        </ul>
                        
                        <h4>认人信号</h4>
                        <p>2-3月龄开始认识妈妈，能区分熟悉和陌生的声音。</p>
                    `
                }
            ]
        },
        "3-6m": {
            title: "3-6月龄 · 早教指南",
            cards: [
                {
                    id: "games",
                    icon: "🎮",
                    title: "分月龄游戏",
                    content: `
                        <h4>3-4月龄游戏</h4>
                        <ul>
                            <li><strong>翻身练习</strong>：侧卧引导翻身</li>
                            <li><strong>靠坐训练</strong>：靠着垫子坐</li>
                            <li><strong>够取玩具</strong>：伸手够取悬挂玩具</li>
                            <li><strong>藏猫猫</strong>：用手帕遮脸</li>
                        </ul>
                        
                        <h4>4-5月龄游戏</h4>
                        <ul>
                            <li><strong>双手抓握</strong>：双手同时抓玩具</li>
                            <li><strong>敲打玩具</strong>：两手对敲</li>
                            <li><strong>镜子游戏</strong>：认识镜中的自己</li>
                            <li><strong>咿呀应答</strong>：互动对话</li>
                        </ul>
                        
                        <h4>5-6月龄游戏</h4>
                        <ul>
                            <li><strong>独坐练习</strong>：扶坐逐渐减少支撑</li>
                            <li><strong>换手游戏</strong>：玩具从一手换到另一手</li>
                            <li><strong>撕纸游戏</strong>：安全的纸，锻炼手指</li>
                            <li><strong>指认五官</strong>：指着自己的鼻子、眼睛</li>
                        </ul>
                    `
                },
                {
                    id: "language",
                    icon: "🗣️",
                    title: "语言启蒙",
                    content: `
                        <h4>语言发展阶段</h4>
                        <ul>
                            <li>3月：咕咕声、咯咯声</li>
                            <li>4月：开始发辅音（a、o、e）</li>
                            <li>5月：尖叫、咿呀学语</li>
                            <li>6月：发ma、ba、da音</li>
                        </ul>
                        
                        <h4>语言训练方法</h4>
                        <ul>
                            <li>指物命名：这是灯、这是球</li>
                            <li>夸张口型：慢速、重复</li>
                            <li>回应发音：宝宝说，你也跟着说</li>
                            <li>读绘本：即使听不懂</li>
                        </ul>
                        
                        <div class="tip-box">
                            6月龄宝宝开始"听懂"简单指令，如"挥手再见"。
                        </div>
                    `
                },
                {
                    id: "motor",
                    icon: "🏃",
                    title: "大运动发展",
                    content: `
                        <h4>运动里程碑</h4>
                        <ul>
                            <li>3月：抬头90°</li>
                            <li>4月：翻身</li>
                            <li>5月：扶坐</li>
                            <li>6月：独坐片刻</li>
                        </ul>
                        
                        <h4>训练建议</h4>
                        <ul>
                            <li>趴着玩：每天累计30-60分钟</li>
                            <li>翻滚游戏：在地垫上练习</li>
                            <li>辅助坐立：用垫子支撑</li>
                            <li>游泳：增加运动量</li>
                        </ul>
                        
                        <div class="warning-box">
                            每个宝宝发展节奏不同，不必过度焦虑，但如有明显落后建议咨询。
                        </div>
                    `
                },
                {
                    id: "cognitive",
                    icon: "🧠",
                    title: "认知能力培养",
                    content: `
                        <h4>因果关系认知</h4>
                        <ul>
                            <li>摇铃会响</li>
                            <li>踢打健身架会动</li>
                            <li>按压玩具会发声</li>
                        </ul>
                        
                        <h4>物体恒存概念</h4>
                        <p>玩具藏起来不再是"消失"，开始理解物体恒存。</p>
                        <ul>
                            <li>用布遮住玩具</li>
                            <li>引导宝宝掀开寻找</li>
                            <li>藏猫猫进阶版</li>
                        </ul>
                        
                        <h4>感知觉发展</h4>
                        <ul>
                            <li>用手感受温度、质地</li>
                            <li>用嘴探索（确保安全）</li>
                            <li>照镜子认识自己</li>
                        </ul>
                    `
                }
            ]
        },
        "6-12m": {
            title: "6-12月龄 · 早教指南",
            cards: [
                {
                    id: "games",
                    icon: "🎮",
                    title: "分月龄游戏",
                    content: `
                        <h4>6-8月龄游戏</h4>
                        <ul>
                            <li><strong>爬行游戏</strong>：用玩具引导爬行</li>
                            <li><strong>坐位平衡</strong>：独坐玩玩具</li>
                            <li><strong>手指食物</strong>：自主进食练习</li>
                            <li><strong>敲敲打打</strong>：锤子敲玩具</li>
                            <li><strong>指认五官</strong>：认识身体部位</li>
                        </ul>
                        
                        <h4>8-10月龄游戏</h4>
                        <ul>
                            <li><strong>扶站训练</strong>：扶家具站立</li>
                            <li><strong>精细动作</strong>：搭积木、叠杯子</li>
                            <li><strong>翻书</strong>：翻硬纸板书</li>
                            <li><strong>模仿秀</strong>：拍手、再见</li>
                            <li><strong>藏猫猫</strong>：理解物体恒存</li>
                        </ul>
                        
                        <h4>10-12月龄游戏</h4>
                        <ul>
                            <li><strong>扶走练习</strong>：牵手走路</li>
                            <li><strong>涂鸦</strong>：蜡笔涂鸦</li>
                            <li><strong>配对游戏</strong>：形状配对</li>
                            <li><strong>语言模仿</strong>：学说词汇</li>
                            <li><strong>简单指令</strong>：理解"不"</li>
                        </ul>
                    `
                },
                {
                    id: "language",
                    icon: "🗣️",
                    title: "语言发展",
                    content: `
                        <h4>语言里程碑</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>月龄</th>
                                        <th>语言表现</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>6-7月</td>
                                        <td>无意识发音（mama、baba）</td>
                                    </tr>
                                    <tr>
                                        <td>8-9月</td>
                                        <td>咿呀学语，有音调变化</td>
                                    </tr>
                                    <tr>
                                        <td>10-11月</td>
                                        <td>有意识叫爸妈</td>
                                    </tr>
                                    <tr>
                                        <td>12月</td>
                                        <td>会说1-2个词，懂简单指令</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>语言促进策略</h4>
                        <ul>
                            <li>多与宝宝说话、读绘本</li>
                            <li>指物命名</li>
                            <li>等待回应</li>
                            <li>放慢语速、夸张口型</li>
                            <li>用词简单、句子短小</li>
                        </ul>
                        
                        <div class="tip-box">
                            12月龄不会说话不算落后，但应有语言理解能力。
                        </div>
                    `
                },
                {
                    id: "motor",
                    icon: "🏃",
                    title: "运动发展训练",
                    content: `
                        <h4>爬行期（6-9月）</h4>
                        <ul>
                            <li>提供安全爬行空间</li>
                            <li>有趣的玩具引导</li>
                            <li>爬行垫、隧道游戏</li>
                            <li>每天爬行时间>30分钟</li>
                        </ul>
                        
                        <h4>站立期（8-12月）</h4>
                        <ul>
                            <li>扶站：扶家具、扶人</li>
                            <li>蹲下站起：捡玩具练习</li>
                            <li>扶走：牵手行走</li>
                            <li>独站片刻：最后阶段</li>
                        </ul>
                        
                        <div class="warning-box">
                            不建议使用学步车！可能造成不良步态和安全问题。
                        </div>
                    `
                },
                {
                    id: "emotion",
                    icon: "😊",
                    title: "情绪与社交",
                    content: `
                        <h4>分离焦虑</h4>
                        <p>8月龄开始认人，对主要照顾者产生强烈依恋。</p>
                        <ul>
                            <li>正常发展阶段的体现</li>
                            <li>分离时简短告别</li>
                            <li>建立固定的告别仪式</li>
                            <li>信任建立：说了走就会回来</li>
                        </ul>
                        
                        <h4>情绪认知</h4>
                        <ul>
                            <li>指认表情图片</li>
                            <li>照镜子认识自己的表情</li>
                            <li>共情能力萌芽</li>
                        </ul>
                        
                        <h4>社交技能</h4>
                        <ul>
                            <li>与同龄小朋友接触</li>
                            <li>家庭社交活动</li>
                            <li>礼貌行为示范</li>
                        </ul>
                    `
                }
            ]
        },
        "1-2y": {
            title: "1-2岁 · 早教指南",
            cards: [
                {
                    id: "games",
                    icon: "🎮",
                    title: "适龄游戏推荐",
                    content: `
                        <h4>1-1.5岁游戏</h4>
                        <ul>
                            <li><strong>运球游戏</strong>：推球、踢球</li>
                            <li><strong>搭积木</strong>：2-3块</li>
                            <li><strong>涂鸦</strong>：乱画线条</li>
                            <li><strong>串珠子</strong>：大珠子</li>
                            <li><strong>配对</strong>：形状嵌板</li>
                            <li><strong>翻书</strong>：一页一页翻</li>
                        </ul>
                        
                        <h4>1.5-2岁游戏</h4>
                        <ul>
                            <li><strong>跑跳</strong>：追逐游戏</li>
                            <li><strong>双脚跳</strong>：地面跳跃</li>
                            <li><strong>积木升级</strong>：4-6块</li>
                            <li><strong>过家家</strong>：角色扮演</li>
                            <li><strong>简单拼图</strong>：2-3片</li>
                            <li><strong>骑三轮车</strong>：初体验</li>
                        </ul>
                        
                        <div class="tip-box">
                            每天至少1小时户外活动，促进运动发展。
                        </div>
                    `
                },
                {
                    id: "language",
                    icon: "🗣️",
                    title: "语言爆发期",
                    content: `
                        <h4>语言发展里程碑</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>年龄</th>
                                        <th>词汇量</th>
                                        <th>表达能力</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15月</td>
                                        <td>5-10个词</td>
                                        <td>会说常见物品</td>
                                    </tr>
                                    <tr>
                                        <td>18月</td>
                                        <td>20-50个词</td>
                                        <td>短语句子</td>
                                    </tr>
                                    <tr>
                                        <td>24月</td>
                                        <td>200+词汇</td>
                                        <td>简单句子</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>促进语言发展</h4>
                        <ul>
                            <li>多与孩子对话</li>
                            <li>读绘本、唱儿歌</li>
                            <li>扩展孩子的话（孩子："狗狗"→"对，是一只大狗狗"）</li>
                            <li>不要过度纠正</li>
                            <li>减少电子产品时间</li>
                        </ul>
                        
                        <div class="warning-box">
                            18月龄词汇量少于10个需警惕，建议发育评估。
                        </div>
                    `
                },
                {
                    id: "motor",
                    icon: "👐",
                    title: "精细动作训练",
                    content: `
                        <h4>手部技能发展</h4>
                        <ul>
                            <li>涂鸦、画线</li>
                            <li>搭积木</li>
                            <li>翻书</li>
                            <li>使用勺子</li>
                            <li>串珠子</li>
                            <li>捏豆子（监督下）</li>
                        </ul>
                        
                        <h4>家庭训练活动</h4>
                        <ul>
                            <li>撕纸游戏</li>
                            <li>折纸飞机</li>
                            <li>玩黏土</li>
                            <li>拧瓶盖</li>
                            <li>剥开食物包装</li>
                        </ul>
                        
                        <h4>注意事项</h4>
                        <p>避免过多代劳，给孩子动手练习的机会。</p>
                    `
                },
                {
                    id: "emotion",
                    icon: "😊",
                    title: "情绪与行为管理",
                    content: `
                        <h4>Terrible Two 来了</h4>
                        <p>1.5-2岁是人生第一个叛逆期，自我意识爆发。</p>
                        
                        <h4>情绪特点</h4>
                        <ul>
                            <li>情绪波动大</li>
                            <li>爱说"不"</li>
                            <li>坚持自己做事</li>
                            <li>容易受挫</li>
                        </ul>
                        
                        <h4>应对策略</h4>
                        <ul>
                            <li><strong>接纳情绪</strong>：允许孩子表达情绪</li>
                            <li><strong>建立规则</strong>：温柔但坚定</li>
                            <li><strong>有限选择</strong>：提供选项而非强制</li>
                            <li><strong>提前预告</strong>：告知即将发生的变化</li>
                            <li><strong>高质量陪伴</strong>：每天专属陪伴时间</li>
                        </ul>
                    `
                },
                {
                    id: "social",
                    icon: "👶",
                    title: "社交能力培养",
                    content: `
                        <h4>平行游戏</h4>
                        <p>1-2岁孩子玩伴特点：各玩各的，但会观察彼此。</p>
                        
                        <h4>社交技能学习</h4>
                        <ul>
                            <li>分享的概念（萌芽期）</li>
                            <li>轮流等待</li>
                            <li>打招呼、告别</li>
                            <li>表达需求</li>
                        </ul>
                        
                        <h4>家长引导</h4>
                        <ul>
                            <li>创造社交机会</li>
                            <li>示范社交行为</li>
                            <li>读社交类绘本</li>
                            <li>处理冲突时引导</li>
                        </ul>
                    `
                }
            ]
        },
        "2-3y": {
            title: "2-3岁 · 早教指南",
            cards: [
                {
                    id: "games",
                    icon: "🎮",
                    title: "适龄游戏推荐",
                    content: `
                        <h4>2-2.5岁游戏</h4>
                        <ul>
                            <li><strong>建构游戏</strong>：积木、磁力片</li>
                            <li><strong>假想游戏</strong>：过家家、医生游戏</li>
                            <li><strong>运动游戏</strong>：踢球、跳远</li>
                            <li><strong>艺术创作</strong>：手指画、贴纸</li>
                            <li><strong>音乐游戏</strong>：跳舞、乐器</li>
                        </ul>
                        
                        <h4>2.5-3岁游戏</h4>
                        <ul>
                            <li><strong>合作游戏</strong>：简单配合</li>
                            <li><strong>规则游戏</strong>：123木头人</li>
                            <li><strong>桌游入门</strong>：简单棋类</li>
                            <li><strong>角色扮演</strong>：情景模拟</li>
                            <li><strong>剪纸</strong>：使用儿童剪刀</li>
                            <li><strong>拼图</strong>：5-10片</li>
                        </ul>
                        
                        <div class="tip-box">
                            选择开放性玩具（积木、画笔），少选声光电玩具。
                        </div>
                    `
                },
                {
                    id: "language",
                    icon: "📚",
                    title: "语言与阅读",
                    content: `
                        <h4>语言发展目标</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>年龄</th>
                                        <th>语言能力</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2.5岁</td>
                                        <td>说3-5个字短句，50+词汇</td>
                                    </tr>
                                    <tr>
                                        <td>3岁</td>
                                        <td>说完整句子，能唱歌、背儿歌</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>阅读培养</h4>
                        <ul>
                            <li>每天固定阅读时间</li>
                            <li>重复阅读喜欢的书</li>
                            <li>互动式阅读（提问、预测）</li>
                            <li>指认图片、说名字</li>
                            <li>复述故事简单情节</li>
                        </ul>
                        
                        <h4>推荐绘本类型</h4>
                        <p>生活习惯类、情绪管理类、认知科普类、故事类。</p>
                    `
                },
                {
                    id: "cognitive",
                    icon: "🧠",
                    title: "认知能力发展",
                    content: `
                        <h4>认知里程碑</h4>
                        <ul>
                            <li>认识大小、颜色</li>
                            <li>数数1-10</li>
                            <li>认识形状</li>
                            <li>简单分类（动物、车辆）</li>
                            <li>时间概念（早上、晚上）</li>
                            <li>因果关系理解</li>
                        </ul>
                        
                        <h4>认知游戏</h4>
                        <ul>
                            <li><strong>分类游戏</strong>：按颜色、形状分类</li>
                            <li><strong>配对游戏</strong>：图片配对</li>
                            <li><strong>数数游戏</strong>：数水果、数积木</li>
                            <li><strong>记忆游戏</strong>：翻牌记忆</li>
                            <li><strong>找不同</strong>：简单版</li>
                        </ul>
                    `
                },
                {
                    id: "emotion",
                    icon: "💭",
                    title: "情绪管理与社交",
                    content: `
                        <h4>情绪认知</h4>
                        <ul>
                            <li>认识基本情绪（开心、生气、伤心、害怕）</li>
                            <li>理解他人的情绪</li>
                            <li>用语言表达情绪</li>
                        </ul>
                        
                        <h4>社交技能</h4>
                        <ul>
                            <li>与其他孩子互动</li>
                            <li>分享与轮流</li>
                            <li>合作游戏</li>
                            <li>解决简单冲突</li>
                        </ul>
                        
                        <h4>情绪引导</h4>
                        <ul>
                            <li>命名情绪："我看到你很生气"</li>
                            <li>共情："我知道你想要那个玩具"</li>
                            <li>提供选择</li>
                            <li>建立情绪调节策略（抱抱、深呼吸）</li>
                        </ul>
                        
                        <div class="tip-box">
                            3岁进入幼儿园准备期，提前模拟集体生活。
                        </div>
                    `
                },
                {
                    id: "pre-school",
                    icon: "🎒",
                    title: "入园准备",
                    content: `
                        <h4>能力准备</h4>
                        <ul>
                            <li>基本自理能力（吃饭、如厕、穿脱衣物）</li>
                            <li>语言表达能力（表达需求、描述问题）</li>
                            <li>社交能力（与其他孩子相处）</li>
                            <li>规则意识（等待、轮流）</li>
                        </ul>
                        
                        <h4>心理准备</h4>
                        <ul>
                            <li>提前参观幼儿园</li>
                            <li>阅读入园绘本</li>
                            <li>模拟分离场景</li>
                            <li>建立告别仪式</li>
                        </ul>
                        
                        <h4>作息准备</h4>
                        <ul>
                            <li>提前调整作息时间</li>
                            <li>与幼儿园作息同步</li>
                            <li>独立午睡能力</li>
                        </ul>
                    `
                }
            ]
        }
    },

    // ===== 护理频道 =====
    care: {
        "0-1m": {
            title: "0-1月龄 · 护理指南",
            cards: [
                {
                    id: "sleep",
                    icon: "😴",
                    title: "睡眠管理",
                    content: `
                        <h4>新生儿睡眠特点</h4>
                        <ul>
                            <li>每天睡眠16-17小时</li>
                            <li>昼夜节律尚未建立</li>
                            <li>胃容量小，需频繁喂养</li>
                            <li>活动睡眠（浅睡）比例高</li>
                        </ul>
                        
                        <h4>睡眠安全（ABCD）</h4>
                        <ul>
                            <li><strong>A - Alone</strong>：独睡，同房不同床</li>
                            <li><strong>B - Back</strong>：仰卧位睡眠</li>
                            <li><strong>C - Crib</strong>：坚实、干净的婴儿床</li>
                            <li><strong>D - Don't</strong>：无枕头、无松软物品、无覆盖物</li>
                        </ul>
                        
                        <h4>睡眠环境</h4>
                        <ul>
                            <li>室温20-22℃</li>
                            <li>湿度50-60%</li>
                            <li>避免过暖（摸后颈温热为宜）</li>
                            <li>保持安静但不必过于安静</li>
                        </ul>
                        
                        <div class="warning-box">
                            安全第一！婴儿床不放任何柔软物品，防止婴儿猝死综合征（SIDS）。
                        </div>
                        <p class="source-ref">参考：美国儿科学会安全睡眠指南</p>
                    `
                },
                {
                    id: "bathing",
                    icon: "🛁",
                    title: "洗澡与清洁",
                    content: `
                        <h4>洗澡频率</h4>
                        <p>新生儿皮肤娇嫩，不必每天洗澡，每周2-3次即可。</p>
                        
                        <h4>洗澡准备</h4>
                        <ul>
                            <li>室温26-28℃</li>
                            <li>水温37-38℃</li>
                            <li>物品准备齐全后再脱衣服</li>
                            <li>准备大毛巾包裹宝宝</li>
                        </ul>
                        
                        <h4>洗澡步骤</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>1. 洗脸</h4>
                                <p>用清水浸湿棉柔巾，从内眼角到外眼角轻轻擦拭</p>
                            </div>
                            <div class="timeline-item">
                                <h4>2. 洗头</h4>
                                <p>拇指和中指压住耳朵，用清水冲洗</p>
                            </div>
                            <div class="timeline-item">
                                <h4>3. 洗身体</h4>
                                <p>先洗上半身，再洗下半身，注意皮肤褶皱处</p>
                            </div>
                            <div class="timeline-item">
                                <h4>4. 包裹擦干</h4>
                                <p>立即用大毛巾包裹，轻轻拍干</p>
                            </div>
                        </div>
                        
                        <div class="warning-box">
                            脐带未脱落前，沐浴可采用擦浴，脐部保持干燥。
                        </div>
                    `
                },
                {
                    id: "skin",
                    icon: "👶",
                    title: "皮肤护理",
                    content: `
                        <h4>日常护理要点</h4>
                        <ul>
                            <li>保持皮肤清洁干燥</li>
                            <li>褶皱处（脖子、腋窝、腹股沟）翻开清洁</li>
                            <li>尿布区及时更换</li>
                            <li>选择婴儿专用温和洗护用品</li>
                        </ul>
                        
                        <h4>脐部护理</h4>
                        <ul>
                            <li>保持干燥清洁</li>
                            <li>沐浴时避免弄湿</li>
                            <li>如被污染，用碘伏消毒</li>
                            <li>一般2周左右脱落</li>
                        </ul>
                        
                        <h4>指甲护理</h4>
                        <p>新生儿指甲软，可用婴儿指甲刀修剪，剪成弧形避免刮伤。</p>
                        
                        <div class="tip-box">
                            润肤乳按需使用，不必每次洗澡都用，干燥时使用即可。
                        </div>
                    `
                },
                {
                    id: "clothes",
                    icon: "👕",
                    title: "衣物选择",
                    content: `
                        <h4>材质选择</h4>
                        <ul>
                            <li>纯棉、A类标准</li>
                            <li>浅色系，避免染色剂</li>
                            <li>柔软、无骨缝制</li>
                            <li>透气、吸汗</li>
                        </ul>
                        
                        <h4>款式选择</h4>
                        <ul>
                            <li>和尚服（0-3月）</li>
                            <li>方便穿脱的连体衣</li>
                            <li>宽松舒适，不过紧</li>
                            <li>领口、袖口平滑</li>
                        </ul>
                        
                        <h4>穿衣原则</h4>
                        <p>比大人多穿一层，选择"洋葱式"穿衣法。</p>
                        <ul>
                            <li>摸后颈判断冷热</li>
                            <li>手脚微凉是正常的</li>
                            <li>避免过度包裹</li>
                        </ul>
                    `
                }
            ]
        },
        "1-3m": {
            title: "1-3月龄 · 护理指南",
            cards: [
                {
                    id: "sleep",
                    icon: "😴",
                    title: "睡眠管理",
                    content: `
                        <h4>睡眠特点</h4>
                        <ul>
                            <li>每天睡眠14-16小时</li>
                            <li>开始建立昼夜节律</li>
                            <li>可能出现肠绞痛影响睡眠</li>
                            <li>白天睡眠逐渐规律</li>
                        </ul>
                        
                        <h4>培养良好睡眠习惯</h4>
                        <ul>
                            <li>建立固定的睡眠仪式</li>
                            <li>区分白天和黑夜（白天多互动、夜间安静）</li>
                            <li>睡前避免过度刺激</li>
                            <li>夜醒时保持安静、低照明</li>
                        </ul>
                        
                        <h4>睡眠仪式推荐</h4>
                        <p>洗澡 → 抚触 → 喂奶 → 换尿布 → 轻声说话 → 入睡</p>
                        
                        <div class="tip-box">
                            这个阶段是培养睡眠习惯的关键期！建立规律作息对以后很重要。
                        </div>
                    `
                },
                {
                    id: "bathing",
                    icon: "🛁",
                    title: "洗澡进阶",
                    content: `
                        <h4>洗澡频率</h4>
                        <p>可以每天洗澡，但不必每次都用沐浴露。</p>
                        
                        <h4>水温与时间</h4>
                        <ul>
                            <li>水温37-38℃</li>
                            <li>室温26-28℃</li>
                            <li>时间5-10分钟</li>
                        </ul>
                        
                        <h4>游泳的好处</h4>
                        <ul>
                            <li>促进运动发育</li>
                            <li>消耗体力，睡得更好</li>
                            <li>注意安全，全程看护</li>
                        </ul>
                        
                        <h4>洗护用品选择</h4>
                        <ul>
                            <li>婴儿专用洗发沐浴二合一</li>
                            <li>弱酸性、无泪配方</li>
                            <li>不必每次都用，一周1-2次即可</li>
                        </ul>
                    `
                },
                {
                    id: "skin",
                    icon: "💧",
                    title: "皮肤保湿",
                    content: `
                        <h4>保湿重要性</h4>
                        <p>婴儿皮肤屏障不完善，需要做好保湿。</p>
                        
                        <h4>润肤产品使用</h4>
                        <ul>
                            <li>洗澡后皮肤还微湿时涂抹</li>
                            <li>干燥时随时补涂</li>
                            <li>选择不含香精的婴儿润肤乳/霜</li>
                        </ul>
                        
                        <h4>口水疹护理</h4>
                        <ul>
                            <li>及时擦干口水</li>
                            <li>涂抹润肤霜隔离</li>
                            <li>使用口水巾</li>
                        </ul>
                        
                        <div class="tip-box">
                            皮肤问题（湿疹）保湿是关键！选择成分简单、无刺激的润肤产品。
                        </div>
                    `
                },
                {
                    id: "habits",
                    icon: "📋",
                    title: "日常习惯培养",
                    content: `
                        <h4>规律作息</h4>
                        <p>开始建立吃-玩-睡的作息规律。</p>
                        
                        <h4>户外活动</h4>
                        <ul>
                            <li>每天1-2次户外活动</li>
                            <li>循序渐进，从每天10分钟开始</li>
                            <li>避免阳光直射眼睛</li>
                            <li>选择空气好的时候</li>
                        </ul>
                        
                        <h4>亲子互动</h4>
                        <ul>
                            <li>抚触按摩</li>
                            <li>被动操</li>
                            <li>趴着玩</li>
                            <li>追视追听游戏</li>
                        </ul>
                    `
                }
            ]
        },
        "3-6m": {
            title: "3-6月龄 · 护理指南",
            cards: [
                {
                    id: "sleep",
                    icon: "😴",
                    title: "睡眠发展",
                    content: `
                        <h4>睡眠变化</h4>
                        <ul>
                            <li>每天睡眠约14-15小时</li>
                            <li>夜奶次数减少</li>
                            <li>白天小睡逐渐规律（2-3次）</li>
                            <li>翻身可能影响睡眠</li>
                        </ul>
                        
                        <h4>分月龄小睡</h4>
                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>月龄</th>
                                        <th>小睡次数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3-4月</td>
                                        <td>4次（容易混乱）</td>
                                    </tr>
                                    <tr>
                                        <td>4-6月</td>
                                        <td>3次（上午+下午+傍晚）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4>翻身期睡眠</h4>
                        <p>宝宝学会翻身后可能会翻醒，需要耐心安抚，帮助固定睡姿。</p>
                        
                        <div class="tip-box">
                            继续保持仰卧入睡，安全第一。
                        </div>
                    `
                },
                {
                    id: "bathing",
                    icon: "🛁",
                    title: "洗澡与清洁",
                    content: `
                        <h4>洗澡要点</h4>
                        <ul>
                            <li>可以开始使用婴儿浴盆</li>
                            <li>水温37-38℃</li>
                            <li>时间5-10分钟</li>
                            <li>玩具可以加入，增加乐趣</li>
                        </ul>
                        
                        <h4>口腔清洁</h4>
                        <p>开始出牙后，可用硅胶指套牙刷清洁牙龈。</p>
                        
                        <h4>衣物清洗</h4>
                        <ul>
                            <li>使用婴儿专用洗衣液</li>
                            <li>与成人衣物分开洗</li>
                            <li>太阳晒干更好</li>
                        </ul>
                    `
                },
                {
                    id: "teething",
                    icon: "🦷",
                    title: "出牙护理",
                    content: `
                        <h4>出牙时间</h4>
                        <p>4-10月龄第一颗乳牙萌出都是正常的。</p>
                        <ul>
                            <li>最早：4月龄</li>
                            <li>最晚：12月龄</li>
                            <li>顺序：下中切牙→上中切牙→侧切牙→第一乳磨牙</li>
                        </ul>
                        
                        <h4>出牙信号</h4>
                        <ul>
                            <li>流口水增多</li>
                            <li>喜欢咬东西</li>
                            <li>牙龈红肿</li>
                            <li>烦躁、哭闹</li>
                            <li>食欲减退</li>
                            <li>低热（一般<38℃）</li>
                        </ul>
                        
                        <h4>缓解不适</h4>
                        <ul>
                            <li>牙胶冷藏（不是冷冻）</li>
                            <li>磨牙棒</li>
                            <li>按摩牙龈</li>
                            <li>口水及时擦干</li>
                        </ul>
                        
                        <div class="warning-box">
                            发热>38℃或持续哭闹需就医排查其他原因。
                        </div>
                    `
                },
                {
                    id: "habits",
                    icon: "🌙",
                    title: "习惯养成",
                    content: `
                        <h4>规律作息</h4>
                        <p>逐步建立固定的吃-玩-睡节奏。</p>
                        
                        <h4>户外习惯</h4>
                        <ul>
                            <li>每天户外活动1-2小时</li>
                            <li>注意防晒（戴帽子）</li>
                            <li>避免阳光直射</li>
                        </ul>
                        
                        <h4>口腔习惯</h4>
                        <p>开始清洁口腔，为日后刷牙打基础。</p>
                        
                        <div class="tip-box">
                            3月龄后可以开始尝试用鸭嘴杯/吸管杯喂水。
                        </div>
                    `
                }
            ]
        },
        "6-12m": {
            title: "6-12月龄 · 护理指南",
            cards: [
                {
                    id: "sleep",
                    icon: "😴",
                    title: "睡眠变化",
                    content: `
                        <h4>睡眠特点</h4>
                        <ul>
                            <li>每天睡眠12-14小时</li>
                            <li>大部分夜奶可戒除</li>
                            <li>白天2次小睡</li>
                            <li>可能因出牙、大运动发展影响睡眠</li>
                        </ul>
                        
                        <h4>典型作息（6-8月）</h4>
                        <ul>
                            <li>7:00 起床、喂奶</li>
                            <li>9:00-10:00 上午小睡</li>
                            <li>12:00 午餐</li>
                            <li>13:00-15:00 下午小睡</li>
                            <li>19:00 夜间入睡</li>
                        </ul>
                        
                        <h4>睡眠倒退</h4>
                        <p>大运动发展期（学坐、爬、站）可能出现睡眠倒退，耐心陪伴即可度过。</p>
                        
                        <div class="tip-box">
                            夜间醒来不要开大灯，保持安静昏暗，帮助接觉。
                        </div>
                    `
                },
                {
                    id: "bathing",
                    icon: "🛁",
                    title: "洗澡进阶",
                    content: `
                        <h4>洗澡要点</h4>
                        <ul>
                            <li>可以坐浴</li>
                            <li>加入洗澡玩具</li>
                            <li>时间10-15分钟</li>
                            <li>洗完后可进行抚触或亲子互动</li>
                        </ul>
                        
                        <h4>独立洗澡准备</h4>
                        <p>开始培养宝宝参与洗澡的习惯。</p>
                        <ul>
                            <li>让宝宝自己玩水</li>
                            <li>引导参与洗浴动作</li>
                            <li>注意防滑</li>
                        </ul>
                    `
                },
                {
                    id: "toilet",
                    icon: "🚽",
                    title: "如厕训练准备",
                    content: `
                        <h4>如厕训练时机</h4>
                        <p>一般18月龄后开始，2-3岁完成。</p>
                        
                        <h4>准备信号</h4>
                        <ul>
                            <li>能理解并听从简单指令</li>
                            <li>纸尿裤能保持2小时干爽</li>
                            <li>能用表情或语言表示要大小便</li>
                            <li>对坐便器感兴趣</li>
                            <li>能够自己穿脱裤子</li>
                        </ul>
                        
                        <h4>早期准备（6-12月）</h4>
                        <ul>
                            <li>选择合适的儿童坐便器</li>
                            <li>让宝宝熟悉坐便器</li>
                            <li>开始把尿（不是真正训练）</li>
                            <li>观察排便时间规律</li>
                        </ul>
                        
                        <div class="tip-box">
                            过早训练无益！一般2岁左右是最佳时机。
                        </div>
                    `
                },
                {
                    id: "habits",
                    icon: "🌟",
                    title: "日常习惯",
                    content: `
                        <h4>进餐习惯</h4>
                        <ul>
                            <li>开始添加辅食</li>
                            <li>坐餐椅进食</li>
                            <li>固定用餐位置</li>
                            <li>逐渐开始自己吃</li>
                        </ul>
                        
                        <h4>口腔护理</h4>
                        <ul>
                            <li>每天清洁牙齿</li>
                            <li>用婴儿牙刷</li>
                            <li>出牙后可用米粒大氟牙膏</li>
                        </ul>
                        
                        <h4>睡眠习惯</h4>
                        <ul>
                            <li>建立睡前仪式</li>
                            <li>固定入睡时间</li>
                            <li>减少夜醒</li>
                        </ul>
                    `
                }
            ]
        },
        "1-2y": {
            title: "1-2岁 · 护理指南",
            cards: [
                {
                    id: "sleep",
                    icon: "😴",
                    title: "睡眠管理",
                    content: `
                        <h4>睡眠特点</h4>
                        <ul>
                            <li>每天11-14小时</li>
                            <li>1-1.5岁可能还有2次小睡</li>
                            <li>1.5-2岁逐渐过渡到1次午睡</li>
                            <li>睡眠问题常见：夜醒、拒绝入睡</li>
                        </ul>
                        
                        <h4>常见睡眠问题</h4>
                        
                        <h5>夜醒</h5>
                        <ul>
                            <li>排查：太热、太冷、饿了、尿了</li>
                            <li>保持安静、低照明安抚</li>
                            <li>避免过度干预</li>
                        </ul>
                        
                        <h5>拒绝入睡</h5>
                        <ul>
                            <li>保持固定的睡前程序</li>
                            <li>白天充分运动</li>
                            <li>避免睡前兴奋</li>
                            <li>给予安抚物</li>
                        </ul>
                        
                        <div class="tip-box">
                            一致的睡前程序是解决睡眠问题的关键！
                        </div>
                    `
                },
                {
                    id: "bathing",
                    icon: "🛁",
                    title: "洗澡护理",
                    content: `
                        <h4>洗澡要点</h4>
                        <ul>
                            <li>可以开始坐浴</li>
                            <li>水温36-38℃</li>
                            <li>时间15-20分钟</li>
                            <li>逐渐培养自主洗澡意识</li>
                        </ul>
                        
                        <h4>卫生习惯培养</h4>
                        <ul>
                            <li>饭前便后洗手</li>
                            <li>开始教导正确洗手方法</li>
                            <li>养成好习惯的基础阶段</li>
                        </ul>
                        
                        <h4>洗护用品</h4>
                        <p>可选择儿童专用洗发水、沐浴露。</p>
                    `
                },
                {
                    id: "toilet",
                    icon: "🚽",
                    title: "如厕训练",
                    content: `
                        <h4>开始时机</h4>
                        <p>18-24月龄，具体看宝宝准备情况。</p>
                        
                        <h4>训练步骤</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <h4>第一步：准备</h4>
                                <p>选择坐便器，放在固定位置，让宝宝熟悉</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第二步：尝试</h4>
                                <p>鼓励坐坐看，不强迫，逐渐延长时间</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第三步：实践</h4>
                                <p>固定时间坐便器（晨起、饭后）</p>
                            </div>
                            <div class="timeline-item">
                                <h4>第四步：脱离尿布</h4>
                                <p>白天脱离尿布，逐渐过渡到夜间</p>
                            </div>
                        </div>
                        
                        <h4>家长心态</h4>
                        <ul>
                            <li>不比较，不着急</li>
                            <li>成功时及时表扬</li>
                            <li>失败时不批评</li>
                            <li>倒退是正常的</li>
                        </ul>
                        
                        <div class="warning-box">
                            如2.5岁后仍无法控制大小便，建议咨询医生。
                        </div>
                    `
                },
                {
                    id: "teeth",
                    icon: "🦷",
                    title: "牙齿护理",
                    content: `
                        <h4>牙齿清洁</h4>
                        <ul>
                            <li>每天早晚刷牙</li>
                            <li>使用儿童牙刷（软毛、小头）</li>
                            <li>使用含氟牙膏（米粒大小）</li>
                            <li>家长帮助刷牙至6-7岁</li>
                        </ul>
                        
                        <h4>刷牙方法</h4>
                        <p>改良巴氏刷牙法或圆弧刷牙法，动作轻柔。</p>
                        
                        <h4>口腔检查</h4>
                        <ul>
                            <li>1岁后每半年口腔检查</li>
                            <li>发现蛀牙及时治疗</li>
                            <li>3-4岁可考虑窝沟封闭</li>
                        </ul>
                        
                        <h4>饮食习惯</h4>
                        <ul>
                            <li>减少甜食摄入</li>
                            <li>避免含奶瓶入睡</li>
                            <li>鼓励咀嚼</li>
                        </ul>
                    `
                },
                {
                    id: "habits",
                    icon: "📋",
                    title: "日常习惯培养",
                    content: `
                        <h4>饮食习惯</h4>
                        <ul>
                            <li>坐餐椅、固定位置进食</li>
                            <li>允许自己吃（脏乱是正常的）</li>
                            <li>不追喂、不哄喂</li>
                            <li>固定用餐时间</li>
                        </ul>
                        
                        <h4>睡眠习惯</h4>
                        <ul>
                            <li>固定作息时间</li>
                            <li>睡前仪式</li>
                            <li>独立入睡能力</li>
                        </ul>
                        
                        <h4>生活能力</h4>
                        <ul>
                            <li>自己拿水杯喝水</li>
                            <li>尝试自己穿脱简单衣物</li>
                            <li>收拾玩具（和家长一起）</li>
                        </ul>
                    `
                }
            ]
        },
        "2-3y": {
            title: "2-3岁 · 护理指南",
            cards: [
                {
                    id: "sleep",
                    icon: "😴",
                    title: "睡眠管理",
                    content: `
                        <h4>睡眠需求</h4>
                        <p>每天10-13小时（包括午睡）。</p>
                        
                        <h4>典型作息</h4>
                        <ul>
                            <li>7:00-7:30 起床</li>
                            <li>12:30-14:30 午睡</li>
                            <li>20:00-20:30 夜间入睡</li>
                        </ul>
                        
                        <h4>睡眠问题处理</h4>
                        
                        <h5>夜惊</h5>
                        <ul>
                            <li>夜间突然大哭，难以唤醒</li>
                            <li>通常在后半夜</li>
                            <li>一般自行缓解</li>
                            <li>不要唤醒孩子</li>
                        </ul>
                        
                        <h5>噩梦</h5>
                        <ul>
                            <li>可被唤醒，事后能回忆</li>
                            <li>安抚、陪伴</li>
                            <li>避免白天看恐怖内容</li>
                        </ul>
                        
                        <h5>磨牙</h5>
                        <p>常见，一般不需要特殊处理，注意观察。</p>
                    `
                },
                {
                    id: "bathing",
                    icon: "🛁",
                    title: "洗澡护理",
                    content: `
                        <h4>洗澡频率</h4>
                        <p>根据活动量，每天或隔天洗澡。</p>
                        
                        <h4>培养独立能力</h4>
                        <ul>
                            <li>自己尝试洗澡（家长监督）</li>
                            <li>学习自己擦干</li>
                            <li>自己穿脱衣服</li>
                        </ul>
                        
                        <h4>卫生教育</h4>
                        <ul>
                            <li>教会正确洗手方法（20秒）</li>
                            <li>便后洗手</li>
                            <li>不咬指甲</li>
                        </ul>
                    `
                },
                {
                    id: "toilet",
                    icon: "🚽",
                    title: "如厕训练完成",
                    content: `
                        <h4>完成标志</h4>
                        <ul>
                            <li>白天能控制大小便</li>
                            <li>能主动表达如厕需求</li>
                            <li>夜间尿布偶尔或经常干爽</li>
                        </ul>
                        
                        <h4>夜间如厕</h4>
                        <p>夜间脱离尿布的时间因人而异，一般5岁前完成。</p>
                        
                        <h4>特殊场景</h4>
                        <ul>
                            <li><strong>外出</strong>：提前告知厕所位置</li>
                            <li><strong>幼儿园</strong>：提前适应独立如厕</li>
                            <li><strong>旅行</strong>：保持规律，多带换洗衣物</li>
                        </ul>
                        
                        <div class="tip-box">
                            训练裤/小内裤是如厕训练的好帮手！
                        </div>
                    `
                },
                {
                    id: "teeth",
                    icon: "🦷",
                    title: "牙齿护理",
                    content: `
                        <h4>刷牙要求</h4>
                        <ul>
                            <li>每天2次</li>
                            <li>每次2-3分钟</li>
                            <li>家长监督或协助</li>
                            <li>使用豌豆大含氟牙膏</li>
                        </ul>
                        
                        <h4>护牙好习惯</h4>
                        <ul>
                            <li>不喝含糖饮料</li>
                            <li>少吃甜食</li>
                            <li>多吃蔬菜水果</li>
                            <li>定期口腔检查</li>
                        </ul>
                        
                        <h4>龋齿预防</h4>
                        <ul>
                            <li>3-4岁进行窝沟封闭</li>
                            <li>每半年涂氟</li>
                            <li>发现小黑点及时就医</li>
                        </ul>
                    `
                },
                {
                    id: "habits",
                    icon: "🎒",
                    title: "入园前准备",
                    content: `
                        <h4>生活习惯准备</h4>
                        <ul>
                            <li>独立进食</li>
                            <li>独立如厕</li>
                            <li>简单穿脱衣物</li>
                            <li>表达需求</li>
                            <li>午睡习惯</li>
                        </ul>
                        
                        <h4>心理准备</h4>
                        <ul>
                            <li>提前参观幼儿园</li>
                            <li>阅读相关绘本</li>
                            <li>模拟幼儿园场景</li>
                            <li>培养分离适应</li>
                        </ul>
                        
                        <h4>物品准备</h4>
                        <ul>
                            <li>换洗衣物（至少一套）</li>
                            <li>隔汗巾</li>
                            <li>安抚物（按园所要求）</li>
                            <li>儿童水杯</li>
                        </ul>
                    `
                }
            ]
        }
    }
};

// 导出数据
window.contentData = contentData;
