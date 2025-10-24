// 交互效果和语言切换
document.addEventListener('DOMContentLoaded', function() {
    // 语言切换功能
    const langButtons = document.querySelectorAll('.lang-btn');
    const zhContents = document.querySelectorAll('.zh-content');
    const enContents = document.querySelectorAll('.en-content');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // 更新按钮状态
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 切换内容显示
            if (lang === 'zh') {
                zhContents.forEach(content => content.style.display = 'block');
                enContents.forEach(content => content.style.display = 'none');
                document.documentElement.lang = 'zh-CN';
            } else {
                zhContents.forEach(content => content.style.display = 'none');
                enContents.forEach(content => content.style.display = 'block');
                document.documentElement.lang = 'en';
            }
        });
    });

    // 链接点击反馈
    const links = document.querySelectorAll('.home-item, .home-contact-icon');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 如果是普通链接，正常跳转
            if (href && !href.startsWith('javascript') && href !== '#') {
                console.log('导航到:', href);
                window.location.href = href;
            } else {
                console.log('特殊链接:', href);
            }
        });
        
        link.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        link.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // 移动端触摸优化
        link.style.minHeight = '44px';
        link.style.cursor = 'pointer';
    });
    
    // 语言切换功能
    document.addEventListener('DOMContentLoaded', function() {
        const langButtons = document.querySelectorAll('.lang-btn');
        const zhContents = document.querySelectorAll('.zh-content');
        const enContents = document.querySelectorAll('.en-content');
        
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                
                // 更新按钮状态
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // 切换内容显示
                if (lang === 'zh') {
                    zhContents.forEach(content => content.style.display = 'block');
                    enContents.forEach(content => content.style.display = 'none');
                    document.documentElement.lang = 'zh-CN';
                } else {
                    zhContents.forEach(content => content.style.display = 'none');
                    enContents.forEach(content => content.style.display = 'block');
                    document.documentElement.lang = 'en';
                }
            });
        });
    });
    
    // 微信二维码显示功能
    function showWechatQR() {
        const modal = document.getElementById('wechatQRModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // 关闭弹窗
    const closeBtn = document.querySelector('.qr-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const modal = document.getElementById('wechatQRModal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }

    // 点击弹窗外部关闭
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('wechatQRModal');
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 将函数暴露到全局作用域
    window.showWechatQR = showWechatQR;
});
