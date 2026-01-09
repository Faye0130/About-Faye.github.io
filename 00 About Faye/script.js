// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 技能进度条动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// 联系方式点击展开
const phoneElement = document.getElementById('phone');
const wechatElement = document.getElementById('wechat');

if (phoneElement) {
    phoneElement.addEventListener('click', function() {
        const phone = prompt('请输入您的电话号码：');
        if (phone) {
            this.textContent = phone;
            this.style.cursor = 'default';
        }
    });
}

if (wechatElement) {
    wechatElement.addEventListener('click', function() {
        const wechat = prompt('请输入您的微信号：');
        if (wechat) {
            this.textContent = wechat;
            this.style.cursor = 'default';
        }
    });
}

// 简历下载功能（需要用户提供PDF文件）
const downloadResume = document.getElementById('downloadResume');
if (downloadResume) {
    downloadResume.addEventListener('click', function(e) {
        e.preventDefault();
        // 这里需要替换为实际的PDF文件路径
        alert('请将您的简历PDF文件放在项目目录下，并更新index.html中的链接地址。');
        // 示例：window.open('resume.pdf', '_blank');
    });
}

// 导航栏高亮当前区域
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// 技能关键词云动画增强
const skillCloud = document.getElementById('skillCloud');
if (skillCloud) {
    const skills = skillCloud.querySelectorAll('span');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.2}s`;
    });
}

// 项目图片点击放大功能
const projectImages = document.querySelectorAll('.project-image');
projectImages.forEach(img => {
    img.addEventListener('click', function() {
        if (this.complete && this.naturalWidth > 0) {
            // 创建遮罩层
            const overlay = document.createElement('div');
            overlay.className = 'image-modal-overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                animation: fadeIn 0.3s ease;
            `;
            
            // 创建关闭按钮
            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.cssText = `
                position: absolute;
                top: 20px;
                right: 30px;
                color: white;
                font-size: 40px;
                font-weight: bold;
                cursor: pointer;
                z-index: 10001;
                transition: transform 0.2s ease;
            `;
            closeBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2)';
            });
            closeBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            // 创建放大图片
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.alt = this.alt;
            enlargedImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 8px;
                pointer-events: none;
            `;
            
            overlay.appendChild(enlargedImg);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden'; // 防止背景滚动
            
            // 关闭函数
            const closeModal = function() {
                document.body.removeChild(overlay);
                document.body.style.overflow = '';
            };
            
            // 点击遮罩或关闭按钮关闭
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay || e.target === closeBtn) {
                    closeModal();
                }
            });
            
            // ESC键关闭
            const escHandler = function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
        }
    });
});


