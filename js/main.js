// 交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 链接点击反馈
    const links = document.querySelectorAll('.home-item, .home-contact-icon');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('导航到:', this.href);
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
    });
    
    // 加载动画
    const items = document.querySelectorAll('.home-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 80);
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
