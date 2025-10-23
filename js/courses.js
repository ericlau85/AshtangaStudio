// 汉堡菜单功能
document.querySelector('.hamburger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.menu-overlay');
    
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    const icon = this.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// 点击遮罩层关闭菜单
document.querySelector('.menu-overlay').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const icon = hamburger.querySelector('i');
    
    navMenu.classList.remove('active');
    this.classList.remove('active');
    icon.className = 'fas fa-bars';
});

// 确保菜单在窗口调整大小时正确重置
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        const overlay = document.querySelector('.menu-overlay');
        const hamburger = document.querySelector('.hamburger');
        const icon = hamburger.querySelector('i');
        
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        icon.className = 'fas fa-bars';
    }
});
