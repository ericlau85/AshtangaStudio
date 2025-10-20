document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.querySelector('.nav-trigger');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.chapter, .article-header');
    
    // 点击菜单项滚动到对应章节
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 滚动时更新活动状态
    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });
        
        // 更新小圆点状态
        if (currentSection) {
            navTrigger.classList.add('active');
        } else {
            navTrigger.classList.remove('active');
        }
        
        // 更新菜单项状态
        navItems.forEach(item => {
            const targetId = item.getAttribute('href').substring(1);
            if (targetId === currentSection) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // 初始化
    
    // 鼠标离开导航区域时保持框架显示一小段时间
    let hideTimeout;
    const chapterNav = document.querySelector('.chapter-nav');
    
    if (chapterNav) {
        chapterNav.addEventListener('mouseleave', function() {
            hideTimeout = setTimeout(() => {
                navMenu.style.opacity = '0';
                navMenu.style.visibility = 'hidden';
                navMenu.style.transform = 'translateY(-50%) translateX(-10px)';
            }, 300);
        });
        
        chapterNav.addEventListener('mouseenter', function() {
            clearTimeout(hideTimeout);
            navMenu.style.opacity = '1';
            navMenu.style.visibility = 'visible';
            navMenu.style.transform = 'translateY(-50%) translateX(0)';
        });
    }
});
