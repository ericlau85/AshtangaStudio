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
