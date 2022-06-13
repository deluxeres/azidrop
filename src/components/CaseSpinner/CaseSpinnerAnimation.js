const animate = function (draw, duration, ease, complete, infinite) {
    const start = performance.now();

    let forceStop = false;

    requestAnimationFrame(function anim(time) {
        let timeFraction = (time - start) / duration;

        if (timeFraction > 1 && !infinite) {
            timeFraction = 1;
        }

        draw(ease ? easing(timeFraction, ease) : timeFraction);

        if ((timeFraction < 1 || infinite) && !forceStop) {
            requestAnimationFrame(anim);
        } else {
            if (complete) {
                complete();
            }
        }
    });

    return {
        stop: function () {
            forceStop = true;
        }
    };
}

function easing(timeFraction, ease) {
    switch (ease) {
        case 'easeInQuad':
            return Math.pow(timeFraction, 2);

        case 'easeOutQuad':
            return 1 - Math.pow(1 - timeFraction, 2);
    }
}

export default function Animate({ from, duration, amountPerDuration }, draw, complete) {
    let endAnimateTo = 0,
        currentAnimateStartPhase = 0,
        currentAnimateResumePhase = 0,
        resumeAnimationPhase = null,
        skipResumePhase = false;

    animate(progress => {
        const animateTo = from + (amountPerDuration * progress);

        currentAnimateStartPhase = animateTo;
        currentAnimateResumePhase = animateTo;

        draw(animateTo);

    }, duration, 'easeInQuad', () => {

        const endPhase = function () {
            const dur = ((endAnimateTo - currentAnimateResumePhase) / amountPerDuration) * duration * 1.5;

            animate(progress => {
                const animateTo = currentAnimateResumePhase + ((endAnimateTo - currentAnimateResumePhase) * progress);

                draw(animateTo);

            }, dur, 'easeOutQuad', () => {
                complete();
            });
        }

        if (skipResumePhase) {
            endPhase();
        } else {
            resumeAnimationPhase = animate(progress => {
                const animateTo = currentAnimateStartPhase + (amountPerDuration * progress);

                currentAnimateResumePhase = animateTo;

                draw(animateTo);

            }, duration / 2, null, endPhase, true);
        }
    });

    return {
        stop: function (val) {
            endAnimateTo = val;
            if (resumeAnimationPhase !== null) {
                resumeAnimationPhase.stop();
            } else {
                skipResumePhase = true;
            }
        }
    };
}
