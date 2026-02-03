const birdData = {
    budgerigar: {
        name: "虎皮鹦鹉",
        description: "虎皮鹦鹉是最受欢迎的宠物鹦鹉之一，体型小巧，性格活泼，易于饲养。原产于澳大利亚，寿命可达10-15年。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄谷子", percentage: 25 },
                    { ingredient: "红谷子", percentage: 15 },
                    { ingredient: "黍子（糜子）", percentage: 10 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 4 },
                    { ingredient: "火麻仁", percentage: 2 },
                    { ingredient: "葵花籽（生）", percentage: 3 },
                    { ingredient: "油菜籽", percentage: 2 },
                    { ingredient: "亚麻籽", percentage: 1 },
                    { ingredient: "南瓜子", percentage: 1 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 12 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 10 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 8 },
                    { ingredient: "蔬菜泥", percentage: 5 },
                    { ingredient: "蛋黄", percentage: 2 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄谷子", percentage: 30 },
                    { ingredient: "红谷子", percentage: 15 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "稗子", percentage: 8 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 5 },
                    { ingredient: "火麻仁", percentage: 2 },
                    { ingredient: "葵花籽（生）", percentage: 4 },
                    { ingredient: "油菜籽", percentage: 2 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 10 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 5 },
                    { ingredient: "新鲜蔬菜", percentage: 3 },
                    { ingredient: "水果", percentage: 2 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 25 },
                    { ingredient: "红谷子", percentage: 15 },
                    { ingredient: "黍子（糜子）", percentage: 10 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 6 },
                    { ingredient: "火麻仁", percentage: 3 },
                    { ingredient: "葵花籽（生）", percentage: 4 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 15 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 8 },
                    { ingredient: "熟蛋黄", percentage: 2 }
                ]
            }
        },
        tips: [
            "幼鸟需要每天喂食4-6次，成鸟每天2-3次",
            "提供清洁的饮用水，每天更换",
            "定期补充钙质，预防缺钙",
            "避免喂食巧克力、咖啡、牛油果等有毒食物",
            "保持笼子清洁，定期消毒"
        ]
    },
    cockatiel: {
        name: "玄凤鹦鹉",
        description: "玄凤鹦鹉以其头顶可竖立的冠羽而闻名，性格温和，易于训练。原产于澳大利亚，寿命可达15-20年。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄谷子", percentage: 22 },
                    { ingredient: "红谷子", percentage: 18 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "稻谷", percentage: 8 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 5 },
                    { ingredient: "火麻仁", percentage: 2 },
                    { ingredient: "葵花籽（生）", percentage: 3 },
                    { ingredient: "油菜籽", percentage: 2 },
                    { ingredient: "亚麻籽", percentage: 1 },
                    { ingredient: "南瓜子", percentage: 1 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 12 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 8 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 8 },
                    { ingredient: "蔬菜泥", percentage: 3 },
                    { ingredient: "蛋黄", percentage: 1 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄谷子", percentage: 28 },
                    { ingredient: "红谷子", percentage: 18 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "稻谷", percentage: 8 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 6 },
                    { ingredient: "火麻仁", percentage: 2 },
                    { ingredient: "葵花籽（生）", percentage: 4 },
                    { ingredient: "油菜籽", percentage: 2 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 10 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 4 },
                    { ingredient: "新鲜蔬菜", percentage: 0 },
                    { ingredient: "水果", percentage: 0 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 22 },
                    { ingredient: "红谷子", percentage: 18 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "稻谷", percentage: 8 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 7 },
                    { ingredient: "火麻仁", percentage: 3 },
                    { ingredient: "葵花籽（生）", percentage: 4 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 15 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 10 },
                    { ingredient: "熟蛋黄", percentage: 3 }
                ]
            }
        },
        tips: [
            "玄凤鹦鹉喜欢社交，需要主人陪伴",
            "提供足够的飞行空间和玩具",
            "定期修剪翅膀和指甲",
            "注意观察冠羽状态，了解鹦鹉情绪",
            "避免突然的噪音和惊吓"
        ]
    },
    lovebird: {
        name: "牡丹鹦鹉",
        description: "牡丹鹦鹉体型小巧但性格活泼，颜色鲜艳。原产于非洲，寿命可达10-15年，是成对饲养的理想选择。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄小米", percentage: 24 },
                    { ingredient: "白小米", percentage: 16 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "稗子", percentage: 10 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 5 },
                    { ingredient: "火麻仁", percentage: 2 },
                    { ingredient: "葵花籽（生）", percentage: 3 },
                    { ingredient: "油菜籽", percentage: 2 },
                    { ingredient: "亚麻籽", percentage: 1 },
                    { ingredient: "南瓜子", percentage: 1 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 12 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 8 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 8 },
                    { ingredient: "蔬菜泥", percentage: 3 },
                    { ingredient: "蛋黄", percentage: 1 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄谷子", percentage: 30 },
                    { ingredient: "红谷子", percentage: 18 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "稗子", percentage: 10 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 6 },
                    { ingredient: "火麻仁", percentage: 2 },
                    { ingredient: "葵花籽（生）", percentage: 4 },
                    { ingredient: "油菜籽", percentage: 2 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 8 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 2 },
                    { ingredient: "新鲜蔬菜", percentage: 0 },
                    { ingredient: "水果", percentage: 0 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 24 },
                    { ingredient: "红谷子", percentage: 16 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "稗子", percentage: 10 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 7 },
                    { ingredient: "火麻仁", percentage: 3 },
                    { ingredient: "葵花籽（生）", percentage: 4 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 15 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 8 },
                    { ingredient: "熟蛋黄", percentage: 3 }
                ]
            }
        },
        tips: [
            "牡丹鹦鹉最好成对饲养",
            "提供巢箱供其休息",
            "定期提供新鲜的树枝供啃咬",
            "注意观察羽毛状况，及时补充营养",
            "保持环境安静，减少压力"
        ]
    },
    "sun-conure": {
        name: "太阳鹦鹉",
        description: "太阳鹦鹉以其鲜艳的橙黄色羽毛而闻名，性格活泼，喜欢玩耍。原产于南美洲，寿命可达25-30年。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄谷子", percentage: 18 },
                    { ingredient: "红谷子", percentage: 14 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "燕麦米", percentage: 8 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 6 },
                    { ingredient: "火麻仁", percentage: 3 },
                    { ingredient: "葵花籽（生）", percentage: 4 },
                    { ingredient: "油菜籽", percentage: 2 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 1 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 15 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 10 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 10 },
                    { ingredient: "蔬菜泥", percentage: 6 },
                    { ingredient: "蛋黄", percentage: 2 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄谷子", percentage: 22 },
                    { ingredient: "红谷子", percentage: 16 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "燕麦米", percentage: 8 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 7 },
                    { ingredient: "火麻仁", percentage: 3 },
                    { ingredient: "葵花籽（生）", percentage: 5 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 10 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 2 },
                    { ingredient: "新鲜蔬菜", percentage: 0 },
                    { ingredient: "水果", percentage: 0 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 18 },
                    { ingredient: "红谷子", percentage: 14 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "燕麦米", percentage: 8 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 8 },
                    { ingredient: "火麻仁", percentage: 4 },
                    { ingredient: "葵花籽（生）", percentage: 5 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 3 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 18 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 12 },
                    { ingredient: "熟蛋黄", percentage: 4 }
                ]
            }
        },
        tips: [
            "太阳鹦鹉需要大量的运动和玩耍时间",
            "提供各种玩具和攀爬设施",
            "注意防晒，羽毛颜色可能因阳光而变化",
            "定期检查喙部，防止过度生长",
            "保持社交互动，避免孤独"
        ]
    },
    "african-grey": {
        name: "非洲灰鹦鹉",
        description: "非洲灰鹦鹉是最聪明的鹦鹉之一，能够模仿人类语言。原产于非洲，寿命可达50-60年。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄小米", percentage: 15 },
                    { ingredient: "白小米", percentage: 12 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 7 },
                    { ingredient: "火麻仁", percentage: 4 },
                    { ingredient: "葵花籽（生）", percentage: 5 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 18 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 12 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 12 },
                    { ingredient: "蔬菜泥", percentage: 8 },
                    { ingredient: "蛋黄", percentage: 3 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄小米", percentage: 18 },
                    { ingredient: "白小米", percentage: 14 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 8 },
                    { ingredient: "火麻仁", percentage: 4 },
                    { ingredient: "葵花籽（生）", percentage: 6 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 3 },
                    { ingredient: "南瓜子", percentage: 3 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 12 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 2 },
                    { ingredient: "新鲜蔬菜", percentage: 0 },
                    { ingredient: "水果", percentage: 0 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 15 },
                    { ingredient: "红谷子", percentage: 12 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 9 },
                    { ingredient: "火麻仁", percentage: 5 },
                    { ingredient: "葵花籽（生）", percentage: 6 },
                    { ingredient: "油菜籽", percentage: 4 },
                    { ingredient: "亚麻籽", percentage: 3 },
                    { ingredient: "南瓜子", percentage: 3 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 20 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 15 },
                    { ingredient: "熟蛋黄", percentage: 5 }
                ]
            }
        },
        tips: [
            "提供丰富的智力刺激和玩具",
            "每天进行语言训练和互动",
            "注意心理健康，避免抑郁",
            "定期体检，预防常见疾病",
            "提供安静的环境供休息"
        ]
    },
    amazon: {
        name: "亚马逊鹦鹉",
        description: "亚马逊鹦鹉以其出色的语言能力和活泼的性格而闻名。原产于中南美洲，寿命可达50-70年。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄谷子", percentage: 16 },
                    { ingredient: "红谷子", percentage: 13 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 6 },
                    { ingredient: "火麻仁", percentage: 4 },
                    { ingredient: "葵花籽（生）", percentage: 5 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 2 },
                    { ingredient: "南瓜子", percentage: 2 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 16 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 11 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 11 },
                    { ingredient: "蔬菜泥", percentage: 7 },
                    { ingredient: "蛋黄", percentage: 3 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄谷子", percentage: 20 },
                    { ingredient: "红谷子", percentage: 15 },
                    { ingredient: "黍子（糜子）", percentage: 12 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 7 },
                    { ingredient: "火麻仁", percentage: 4 },
                    { ingredient: "葵花籽（生）", percentage: 6 },
                    { ingredient: "油菜籽", percentage: 3 },
                    { ingredient: "亚麻籽", percentage: 3 },
                    { ingredient: "南瓜子", percentage: 3 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 11 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 3 },
                    { ingredient: "新鲜蔬菜", percentage: 0 },
                    { ingredient: "水果", percentage: 0 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 16 },
                    { ingredient: "红谷子", percentage: 13 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 8 },
                    { ingredient: "火麻仁", percentage: 5 },
                    { ingredient: "葵花籽（生）", percentage: 6 },
                    { ingredient: "油菜籽", percentage: 4 },
                    { ingredient: "亚麻籽", percentage: 3 },
                    { ingredient: "南瓜子", percentage: 3 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 18 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 14 },
                    { ingredient: "熟蛋黄", percentage: 4 }
                ]
            }
        },
        tips: [
            "亚马逊鹦鹉需要大量的社交互动",
            "提供坚固的玩具供啃咬",
            "注意控制体重，避免肥胖",
            "定期修剪翅膀和指甲",
            "保持环境安静，避免压力"
        ]
    },
    macaw: {
        name: "金刚鹦鹉",
        description: "金刚鹦鹉是体型最大的鹦鹉之一，色彩绚丽，性格温和。原产于中南美洲，寿命可达60-80年。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄小米", percentage: 12 },
                    { ingredient: "白小米", percentage: 10 },
                    { ingredient: "黍子（糜子）", percentage: 8 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 },
                    { ingredient: "稻谷", percentage: 5 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 8 },
                    { ingredient: "火麻仁", percentage: 5 },
                    { ingredient: "葵花籽（生）", percentage: 6 },
                    { ingredient: "油菜籽", percentage: 4 },
                    { ingredient: "亚麻籽", percentage: 3 },
                    { ingredient: "南瓜子", percentage: 3 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 20 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 14 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 14 },
                    { ingredient: "蔬菜泥", percentage: 9 },
                    { ingredient: "蛋黄", percentage: 4 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄小米", percentage: 16 },
                    { ingredient: "白小米", percentage: 12 },
                    { ingredient: "黍子（糜子）", percentage: 10 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 },
                    { ingredient: "稻谷", percentage: 5 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 9 },
                    { ingredient: "火麻仁", percentage: 5 },
                    { ingredient: "葵花籽（生）", percentage: 7 },
                    { ingredient: "油菜籽", percentage: 4 },
                    { ingredient: "亚麻籽", percentage: 4 },
                    { ingredient: "南瓜子", percentage: 4 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 14 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 3 },
                    { ingredient: "新鲜蔬菜", percentage: 0 },
                    { ingredient: "水果", percentage: 0 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 12 },
                    { ingredient: "红谷子", percentage: 10 },
                    { ingredient: "黍子（糜子）", percentage: 8 },
                    { ingredient: "燕麦米", percentage: 8 },
                    { ingredient: "高粱米", percentage: 6 },
                    { ingredient: "稻谷", percentage: 5 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 10 },
                    { ingredient: "火麻仁", percentage: 6 },
                    { ingredient: "葵花籽（生）", percentage: 7 },
                    { ingredient: "油菜籽", percentage: 5 },
                    { ingredient: "亚麻籽", percentage: 4 },
                    { ingredient: "南瓜子", percentage: 4 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 22 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 16 },
                    { ingredient: "熟蛋黄", percentage: 5 }
                ]
            }
        },
        tips: [
            "金刚鹦鹉需要非常大的活动空间",
            "提供坚固的大型玩具和攀爬设施",
            "定期检查喙部，防止过度生长",
            "注意补充钙质，预防骨骼问题",
            "保持社交互动，避免孤独"
        ]
    },
    eclectus: {
        name: "吸蜜鹦鹉",
        description: "吸蜜鹦鹉以其鲜艳的羽毛和独特的饮食需求而闻名。原产于澳大利亚、新几内亚等地，寿命可达30-50年。",
        formulas: {
            young: {
                staple: [
                    { ingredient: "黄谷子", percentage: 10 },
                    { ingredient: "红谷子", percentage: 8 },
                    { ingredient: "黍子（糜子）", percentage: 6 },
                    { ingredient: "燕麦米", percentage: 6 },
                    { ingredient: "高粱米", percentage: 5 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 9 },
                    { ingredient: "火麻仁", percentage: 5 },
                    { ingredient: "葵花籽（生）", percentage: 6 },
                    { ingredient: "油菜籽", percentage: 4 },
                    { ingredient: "亚麻籽", percentage: 3 },
                    { ingredient: "南瓜子", percentage: 3 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 22 },
                    { ingredient: "稗子（也可归主食，低蛋白高纤维）", percentage: 16 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 16 },
                    { ingredient: "蔬菜泥", percentage: 10 },
                    { ingredient: "蛋黄", percentage: 5 }
                ]
            },
            adult: {
                staple: [
                    { ingredient: "黄谷子", percentage: 14 },
                    { ingredient: "红谷子", percentage: 10 },
                    { ingredient: "黍子（糜子）", percentage: 8 },
                    { ingredient: "燕麦米", percentage: 6 },
                    { ingredient: "高粱米", percentage: 5 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 10 },
                    { ingredient: "火麻仁", percentage: 5 },
                    { ingredient: "葵花籽（生）", percentage: 7 },
                    { ingredient: "油菜籽", percentage: 4 },
                    { ingredient: "亚麻籽", percentage: 4 },
                    { ingredient: "南瓜子", percentage: 4 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 16 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 5 },
                    { ingredient: "新鲜蔬菜", percentage: 0 },
                    { ingredient: "水果", percentage: 0 }
                ]
            },
            breeding: {
                staple: [
                    { ingredient: "黄谷子", percentage: 10 },
                    { ingredient: "红谷子", percentage: 8 },
                    { ingredient: "黍子（糜子）", percentage: 6 },
                    { ingredient: "燕麦米", percentage: 6 },
                    { ingredient: "高粱米", percentage: 5 }
                ],
                oil: [
                    { ingredient: "苏子（紫苏子）", percentage: 11 },
                    { ingredient: "火麻仁", percentage: 6 },
                    { ingredient: "葵花籽（生）", percentage: 7 },
                    { ingredient: "油菜籽", percentage: 5 },
                    { ingredient: "亚麻籽", percentage: 4 },
                    { ingredient: "南瓜子", percentage: 4 }
                ],
                nutrition: [
                    { ingredient: "加纳利子（白尖粟，核心款）", percentage: 24 },
                    { ingredient: "少量煮熟的杂粮豆（鹰嘴豆/小扁豆，植物蛋白）", percentage: 18 },
                    { ingredient: "熟蛋黄", percentage: 6 }
                ]
            }
        },
        tips: [
            "吸蜜鹦鹉需要高纤维饮食",
            "避免过多种子，以水果蔬菜为主",
            "定期提供新鲜的花蜜",
            "注意观察羽毛颜色变化",
            "保持环境湿度适中"
        ]
    }
};

let selectedBirds = [];
let selectedFormula = 'young';

function updateSelectedBirdsDisplay() {
    const birdsList = document.getElementById('birdsList');
    
    if (selectedBirds.length === 0) {
        birdsList.textContent = '请选择鹦鹉种类';
        birdsList.style.color = '#6c757d';
    } else {
        const birdNames = selectedBirds.map(birdKey => birdData[birdKey].name);
        birdsList.textContent = birdNames.join('、');
        birdsList.style.color = '#495057';
    }
}

function calculateAverageFormula(birdKeys, formulaType) {
    if (birdKeys.length === 0) return { staple: [], oil: [], nutrition: [] };
    
    const stapleMap = new Map();
    const oilMap = new Map();
    const nutritionMap = new Map();
    
    birdKeys.forEach(birdKey => {
        const bird = birdData[birdKey];
        const formula = bird.formulas[formulaType];
        
        formula.staple.forEach(item => {
            if (stapleMap.has(item.ingredient)) {
                stapleMap.set(item.ingredient, stapleMap.get(item.ingredient) + item.percentage);
            } else {
                stapleMap.set(item.ingredient, item.percentage);
            }
        });
        
        formula.oil.forEach(item => {
            if (oilMap.has(item.ingredient)) {
                oilMap.set(item.ingredient, oilMap.get(item.ingredient) + item.percentage);
            } else {
                oilMap.set(item.ingredient, item.percentage);
            }
        });
        
        formula.nutrition.forEach(item => {
            if (nutritionMap.has(item.ingredient)) {
                nutritionMap.set(item.ingredient, nutritionMap.get(item.ingredient) + item.percentage);
            } else {
                nutritionMap.set(item.ingredient, item.percentage);
            }
        });
    });
    
    const averageFormula = { staple: [], oil: [], nutrition: [] };
    
    stapleMap.forEach((totalPercentage, ingredient) => {
        const avgPercentage = totalPercentage / birdKeys.length;
        averageFormula.staple.push({
            ingredient: ingredient,
            percentage: avgPercentage
        });
    });
    
    oilMap.forEach((totalPercentage, ingredient) => {
        const avgPercentage = totalPercentage / birdKeys.length;
        averageFormula.oil.push({
            ingredient: ingredient,
            percentage: avgPercentage
        });
    });
    
    nutritionMap.forEach((totalPercentage, ingredient) => {
        const avgPercentage = totalPercentage / birdKeys.length;
        averageFormula.nutrition.push({
            ingredient: ingredient,
            percentage: avgPercentage
        });
    });
    
    averageFormula.staple.sort((a, b) => b.percentage - a.percentage);
    averageFormula.oil.sort((a, b) => b.percentage - a.percentage);
    averageFormula.nutrition.sort((a, b) => b.percentage - a.percentage);
    
    return averageFormula;
}

function calculateWeights(formula, totalAmount, unit) {
    let totalInGrams = unit === 'kg' ? totalAmount * 1000 : totalAmount;
    
    const result = {
        staple: [],
        oil: [],
        nutrition: []
    };
    
    let stapleTotal = 0;
    let oilTotal = 0;
    let nutritionTotal = 0;
    
    formula.staple.forEach(item => {
        const weight = (totalInGrams * item.percentage / 100).toFixed(2);
        stapleTotal += parseFloat(weight);
        result.staple.push({
            ingredient: item.ingredient,
            weight: parseFloat(weight),
            percentage: item.percentage,
            unit: unit === 'kg' ? '克' : '克'
        });
    });
    
    formula.oil.forEach(item => {
        const weight = (totalInGrams * item.percentage / 100).toFixed(2);
        oilTotal += parseFloat(weight);
        result.oil.push({
            ingredient: item.ingredient,
            weight: parseFloat(weight),
            percentage: item.percentage,
            unit: unit === 'kg' ? '克' : '克'
        });
    });
    
    formula.nutrition.forEach(item => {
        const weight = (totalInGrams * item.percentage / 100).toFixed(2);
        nutritionTotal += parseFloat(weight);
        result.nutrition.push({
            ingredient: item.ingredient,
            weight: parseFloat(weight),
            percentage: item.percentage,
            unit: unit === 'kg' ? '克' : '克'
        });
    });
    
    result.stapleTotal = stapleTotal.toFixed(2);
    result.oilTotal = oilTotal.toFixed(2);
    result.nutritionTotal = nutritionTotal.toFixed(2);
    
    return result;
}

function renderResults(weights, totalAmount, unit) {
    const resultSection = document.getElementById('resultSection');
    const formulaTypeText = {
        'young': '幼鸟期配方',
        'adult': '成鸟期配方',
        'breeding': '繁殖期配方'
    };
    
    document.getElementById('resultFormulaType').textContent = formulaTypeText[selectedFormula];
    
    const birdNames = selectedBirds.map(birdKey => birdData[birdKey].name).join('、');
    document.getElementById('resultBirds').textContent = birdNames;
    
    const unitText = unit === 'kg' ? '千克' : '克';
    document.getElementById('resultTotal').textContent = `${totalAmount} ${unitText}`;
    
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    
    const categories = [
        { name: '主食粮', items: weights.staple, icon: '🌾' },
        { name: '油料粮', items: weights.oil, icon: '🌻' },
        { name: '营养粮', items: weights.nutrition, icon: '🥗' }
    ];
    
    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        
        let categoryTotal = '';
        if (category.name === '主食粮') {
            categoryTotal = `<span class="category-total">总计：${weights.stapleTotal} 克</span>`;
        } else if (category.name === '油料粮') {
            categoryTotal = `<span class="category-total">总计：${weights.oilTotal} 克</span>`;
        } else if (category.name === '营养粮') {
            categoryTotal = `<span class="category-total">总计：${weights.nutritionTotal} 克</span>`;
        }
        
        categoryTitle.innerHTML = `<span class="category-icon">${category.icon}</span><span class="category-name">${category.name}</span>${categoryTotal}`;
        categorySection.appendChild(categoryTitle);
        
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'category-items-grid';
        
        category.items.forEach(item => {
            if (item.weight > 0) {
                const itemCard = document.createElement('div');
                itemCard.className = 'category-item';
                itemCard.innerHTML = `
                    <div class="item-name">${item.ingredient}</div>
                    <div class="item-weight">${item.weight} <span class="item-unit">${item.unit}</span></div>
                    <div class="item-percentage">${item.percentage.toFixed(1)}%</div>
                `;
                itemsGrid.appendChild(itemCard);
            }
        });
        
        categorySection.appendChild(itemsGrid);
        categoryList.appendChild(categorySection);
    });
    
    resultSection.style.display = 'block';
    
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateTips() {
    const tipsContent = document.getElementById('tipsContent');
    
    if (selectedBirds.length === 0) {
        tipsContent.innerHTML = '<ul><li>请选择鹦鹉种类以查看饲养小贴士</li></ul>';
        return;
    }
    
    const allTips = new Set();
    selectedBirds.forEach(birdKey => {
        birdData[birdKey].tips.forEach(tip => allTips.add(tip));
    });
    
    let html = '<ul>';
    allTips.forEach(tip => {
        html += `<li>${tip}</li>`;
    });
    html += '</ul>';
    
    tipsContent.innerHTML = html;
}

function init() {
    const birdCheckboxes = document.querySelectorAll('.bird-checkbox input[type="checkbox"]');
    const formulaOptions = document.querySelectorAll('.formula-option input[type="radio"]');
    const calculateBtn = document.getElementById('calculateBtn');
    
    birdCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const birdKey = this.value;
            const label = this.closest('.bird-checkbox');
            
            if (this.checked) {
                if (!selectedBirds.includes(birdKey)) {
                    selectedBirds.push(birdKey);
                }
                label.classList.add('checked');
            } else {
                selectedBirds = selectedBirds.filter(key => key !== birdKey);
                label.classList.remove('checked');
            }
            
            updateSelectedBirdsDisplay();
            updateTips();
        });
    });
    
    formulaOptions.forEach(radio => {
        radio.addEventListener('change', function() {
            selectedFormula = this.value;
            const label = this.closest('.formula-option');
            
            document.querySelectorAll('.formula-option').forEach(opt => {
                opt.classList.remove('checked');
            });
            label.classList.add('checked');
        });
    });
    
    calculateBtn.addEventListener('click', function() {
        if (selectedBirds.length === 0) {
            alert('请至少选择一种鹦鹉种类');
            return;
        }
        
        const totalAmount = parseFloat(document.getElementById('totalAmount').value);
        const unit = document.getElementById('unit').value;
        
        if (isNaN(totalAmount) || totalAmount <= 0) {
            alert('请输入有效的粮食总量');
            return;
        }
        
        const averageFormula = calculateAverageFormula(selectedBirds, selectedFormula);
        const weights = calculateWeights(averageFormula, totalAmount, unit);
        
        renderResults(weights, totalAmount, unit);
    });
    
    updateSelectedBirdsDisplay();
    updateTips();
}

document.addEventListener('DOMContentLoaded', init);