{
  const buttons = document.querySelectorAll('.cta-buttons a');

  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power1.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'power1.inOut',
      });
    });
  });

  const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power3.out",
  },
  delay: 1,
  });

  // 1. 메인 텍스트
  tl.from(['.section-topic', '.main-text span'], {
    x: -50,
    opacity: 0,
    stagger: 0.6,
  });

  // 2. 서브 텍스트
  tl.from('.sub-text span', {
    x: -50,
    opacity: 0,
    stagger: 0.5,
  }, '-=0.5');

  // 3. CTA 버튼
  tl.from('.cta-buttons a', {
    x: -30,
    opacity: 0,
    stagger: 0.3,
  }, '-=0.3');

  // 4. 도형 패턴 애니메이션
  tl.from([
     '.pattern-1', '.pattern-2', '.pattern-3', '.pattern-4',
  ], {
    y: -100,
    opacity: 0,
    stagger: 0.1,
  }, '-=0.5');

  tl.from([
    '.portrait', '.pattern-7', '.pattern-5', '.pattern-8', '.line-horizontal__1', '.line-horizontal__2', '.line-horizontal__3', 
  ], {
    x: -100,
    opacity: 0,
    stagger: 0.1,
  }, '-=0.5');

  tl.from(['.pattern-6', '.pattern-9'], {
    x: 100,
    opacity: 0,
    stagger: 0.1,
  }, '-=0.5');

  tl.from(['.pattern-10', '.pattern-11', '.pattern-12', '.pattern-13', '.pattern-14', '.pattern-15', '.pattern-16', '.line-vertical__1', '.line-vertical__2', '.line-vertical__3'], {
    y: 100,
    opacity: 0,
    stagger: 0.1,
  }, '-=0.8');
}