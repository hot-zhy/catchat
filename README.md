# 宽心数字喵——基于NLP的情绪调节器

## 项目简介

### 小程序解决问题

当前社会生活工作的节奏不断提高，人们愈发显得焦虑、抑郁、孤独，在诸多负面情绪的笼罩下，情绪释放和倾诉成为一个日益增长的情绪诉求。然而，很多人并没有这样一个承载负能量的载体。因此，我们的小程序致力于帮助在生活中出现焦虑等负面情绪且有释放和情绪需求、又不想让身边的人知悉的用户。

### 提出方案

①　以用户领养的猫猫为形象和载体，打造一个专门用来倾诉和获取安慰的虚拟聊天机器人—“宽心数字喵”；

②　用户在小程序中不仅可以向自己的猫猫发出聊天，还可以进行一系列与猫猫的交互活动，平台利用自然语言处理（NLP）等技术选取回复的信息进行回复；

③　除此之外，用户在小程序中还可以获取相关心理知识，我们的小程序还会熟悉用户的软件行为习惯，刻画用户画像，为不同情绪严重程度的用户提供不同的服务。

### 方案特征

1. 该方案将聊天机器人“宽心数字喵”的形象进行了可视化，让其更加贴近用户，让用户切实地感受到猫猫的真实性；
2. 该方案不仅满足了用户的倾诉需求，还含有游戏元素，让用户在游戏和聊天世界中，得到最大程度的情绪释放。

## 技术栈

- uni-app
- uniCloud

## 项目运行

下载项目，导入到Hbuilderx编辑器中，即可一键运行，需要注意的是，需要在/pages/chat/chat.vue中写入自己的openai的api-key：

![image](https://user-images.githubusercontent.com/100272100/227114104-4a7d42fe-3771-4aee-951c-34aae6abcae3.png)

## 项目技术创新

1. openai后台的封装：在openai接入前，我们在后台对openai进行了封装，使得用户在一开始对话时就可以把对方当成一个小猫咪，我们的“宽心数字喵”聊天机器人会把自己认为是一个小猫咪，以一个小猫咪的角色给予用户积极正能量的回复；
2. NLP情感得分的计算：我们并没有将openai的回复一股脑地返回给用户，而是通过hanlp对openai产生的回答进行了情感分析，判断了一段文本的情感极性

## 部分运行截图
![image](https://user-images.githubusercontent.com/100272100/227114170-9a2c07e2-2e57-49dd-8c33-5bfd3133cdb8.png)
![image](https://user-images.githubusercontent.com/100272100/227114225-6c152fd6-40b9-4d64-812f-f57ce9bd8c41.png)
![image](https://user-images.githubusercontent.com/100272100/227114510-d3b55d81-0bb8-4ff4-9ec9-4fbcf3e15179.png)
![image](https://user-images.githubusercontent.com/100272100/227114539-6f554b5c-b22b-41bc-9866-e914778468d4.png)
![image](https://user-images.githubusercontent.com/100272100/227114751-38180bc6-b9b7-482f-b117-2c07b7060adf.png)
![image](https://user-images.githubusercontent.com/100272100/227114936-b9bdaa60-d66f-4cff-9cdf-99a4eacb66f1.png)
![image](https://user-images.githubusercontent.com/100272100/227115353-1d06bdc0-8a50-45d2-b572-52e784dfbc22.png)
![image](https://user-images.githubusercontent.com/100272100/227115455-d068f8a8-1d62-4ef0-87a0-afb002a1d25f.png)

## 产品使用说明书
见《使用说明书》
