(($) => {
    'use strict';

    // When DOM is ready
    $(() => {

        $('.heading-slider').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 500,
            autoplayHoverPause: false
        });

        function showEffect() {
            let el = document.querySelectorAll('.info-box')[0];
            let textArr = el.innerHTML.split(' ');
            let result = textArr.map(function(el) {
                return '<span class="word">' + el + ' </span>';
            }).join(' ');
            el.innerHTML = result;
        }
        showEffect();

        function makeNewPosition() {
            var h = $(window).height() - 100;
            var w = $(window).width() - 100;

            var nh = Math.floor(Math.random() * h);
            var nw = Math.floor(Math.random() * w);

            return [nh, nw];

        }

        function animateDiv(el) {
            var newq = makeNewPosition(el);
            var oldq = $(el).offset();
            var speed = calcSpeed([oldq.top, oldq.left], newq);
            $(el).animate({ top: newq[0], left: newq[1] }, speed, 'swing', function() {
                animateDiv(el);
            });

        }

        function calcSpeed(prev, next) {

            var x = Math.abs(prev[1] - next[1]);
            var y = Math.abs(prev[0] - next[0]);

            var greatest = x > y ? x : y;

            var speedModifier = 0.05;

            var speed = Math.ceil(greatest / speedModifier);

            return speed;


        }

        function animation() {
            let animEl = document.querySelectorAll('[data-el]');
            console.log(animEl);
            animEl.forEach(el => {
                animateDiv(el);
            });
        }
        animation();
        setTimeout(() => {
            document.getElementsByTagName('body')[0].classList.add('page-loaded');
        }, 1000);

        function shapesAnimation() {
            var canvas = document.getElementById('shape');
            var bodyW = document.getElementsByTagName('body')[0].clientWidth;
            var bodyH = document.getElementsByTagName('body')[0].clientHeight;
            let widthK = 1;
            setCanvasSize();

            function setCanvasSize() {

                bodyW = document.getElementsByTagName('body')[0].clientWidth;
                bodyH = document.getElementsByTagName('body')[0].clientHeight;
                canvas.setAttribute('height', bodyH);
                canvas.setAttribute('width', bodyW);
                if (bodyW < 768 ){
                    widthK = 0.5;
                }
                if (bodyW < 480 ){
                    widthK = 0.25;
                }
            }
            window.addEventListener('resize', function() {
                setCanvasSize();

            });
            var ctx = canvas.getContext('2d');
            var raf;

            var ball = {
                x: 156,
                y: 156,
                sensX: 0.5,
                sensY: 0.5,
                radius: 249 * widthK,
                color: '#e9feff',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };
            var rect1 = {
                x: bodyW - 146,
                y: 26,
                size: 100  * widthK,
                radius: 104  * widthK,
                color: '#b7cedd',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x + this.size, this.y + this.size);
                    ctx.lineTo(this.x, this.y + this.size * 2);
                    ctx.lineTo(this.x - this.size, this.y + this.size);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };
            var rect3 = {
                x: 50,
                y: bodyH - 56,
                size: 200  * widthK,
                radius: 204  * widthK,
                color: '#c3e8ff',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x + this.size, this.y + this.size);
                    ctx.lineTo(this.x, this.y + this.size * 2);
                    ctx.lineTo(this.x - this.size, this.y + this.size);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };
            var ball2 = {
                x: bodyW - 226,
                y: 406,
                radius: 49  * widthK,
                color: '#b7cedd',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };
            var ball3 = {
                x: bodyW - 286,
                y: 306,
                sensX: 0.2,
                sensY: 0.3,
                radius: 49  * widthK,
                color: '#e1fdff',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };
            var ball4 = {
                x: bodyW - 150,
                y: bodyH - 150,
                radius: 229  * widthK,
                color: '#e1fdff',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };
            var ball5 = {
                x: bodyW - 750,
                y: bodyH - 150,
                radius: 99  * widthK,
                color: '#e1fdff',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };
            var rect2 = {
                x: bodyW - 446,
                y: bodyH - 250,
                size: 100 * widthK,
                radius: 14  * widthK,
                color: '#bad1de',
                angle: 0,
                draw: function() {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x + this.size, this.y + this.size - 50);
                    ctx.lineTo(this.x + this.size, this.y + this.size * 2 - 50);
                    ctx.lineTo(this.x, this.y + this.size * 2);
                    ctx.lineTo(this.x - this.size, this.y + this.size * 2 - 50);
                    ctx.lineTo(this.x - this.size, this.y + this.size - 50);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            };

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ball.draw();
                ball.x += Math.cos(ball.angle) * Math.random();
                ball.y += Math.sin(ball.angle) * Math.random();
                ball.angle += 0.004;
                rect1.draw();
                rect1.x -= Math.cos(rect1.angle) * Math.random() * 0.4;
                rect1.y -= Math.sin(rect1.angle) * Math.random() * 0.4;
                rect1.angle += 0.002;
                ball2.draw();
                ball2.x += Math.cos(ball2.angle) * Math.random();
                ball2.y += Math.sin(ball2.angle) * Math.random();
                ball2.angle += 0.002;
                ball3.x += Math.cos(ball3.angle) * Math.random();
                ball3.y -= Math.sin(ball3.angle) * Math.random();
                ball3.angle += 0.004;
                ball3.draw();
                ball4.x -= Math.cos(ball4.angle) * Math.random();
                ball4.y += Math.sin(ball4.angle) * Math.random();
                ball4.angle += 0.003;
                rect2.draw();
                ball4.draw();
                rect2.x -= Math.cos(rect2.angle) * Math.random();
                rect2.y -= Math.sin(rect2.angle) * Math.random();
                rect2.angle += 0.008;
                ball5.draw();
                ball5.x -= Math.cos( ball5.angle) * Math.random();
                ball5.y -= Math.sin( ball5.angle) * Math.random();
                ball5.angle += 0.003;
                rect3.draw();
                rect3.x += Math.cos( rect3.angle) * Math.random();
                rect3.y -= Math.sin( rect3.angle) * Math.random();
                rect3.angle += 0.003;
                raf = window.requestAnimationFrame(draw);
            }

            raf = window.requestAnimationFrame(draw);




            ball.draw();
        }
        shapesAnimation();
    });

})(jQuery);