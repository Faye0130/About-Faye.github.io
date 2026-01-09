# 王菲个人主页

一个现代简约风格的个人网页，用于展示个人简历和作品集。

## 功能特点

- ✅ 单页滚动式设计，流畅的用户体验
- ✅ 响应式布局，支持移动端和桌面端
- ✅ 现代简约专业风格，白色背景搭配浅紫色主题
- ✅ 包含完整的个人介绍模块：个人优势、工作经历、项目经历、技能图谱等
- ✅ 平滑滚动导航和动画效果

## 文件结构

```
.
├── index.html      # 主页面文件
├── style.css       # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件即可查看网页
2. 或者使用本地服务器运行（推荐）：
   - 使用 Python: `python -m http.server 8000`
   - 使用 Node.js: `npx http-server`
   - 然后在浏览器访问 `http://localhost:8000`

## 自定义内容

### 修改个人信息

1. **联系方式**：在 `index.html` 中找到联系方式部分，修改电话、邮箱、微信等信息
2. **工作经历**：在"工作经历"模块中更新您的实际工作经历
3. **项目经历**：在"项目经历"模块中添加您的实际项目
4. **技能数据**：在"技能图谱"模块中调整技能熟练度百分比

### 添加个人照片

1. 将您的职业形象照命名为 `profile.jpg` 并放在项目目录
2. 在 `index.html` 中找到 `.profile-placeholder` 部分，替换为：
   ```html
   <img src="profile.jpg" alt="王菲" class="profile-image">
   ```
3. 同样方式替换"关于我"部分的照片

### 添加简历PDF

1. 将您的简历PDF文件放在项目目录，命名为 `resume.pdf`
2. 在 `script.js` 中找到简历下载部分，取消注释并修改：
   ```javascript
   downloadResume.addEventListener('click', function(e) {
       e.preventDefault();
       window.open('resume.pdf', '_blank');
   });
   ```

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 技术栈

- 纯 HTML5
- CSS3 (使用 CSS Grid 和 Flexbox)
- 原生 JavaScript (无框架依赖)

## 注意事项

- 所有内容都是示例数据，请根据实际情况修改
- 联系方式部分默认是"点击查看"，您可以在 `script.js` 中设置默认值
- 建议使用现代浏览器以获得最佳体验


