export default function Animate ({ from, duration, amountPerDuration }, draw, complete) {
    const start = performance.now();

    let endTimeFraction = 0,
        endAnimateTo,
        currentAnimateTo,
        stop = false,
        currentTimeFraction;

    requestAnimationFrame(function anim(time) {
        let timeFraction = (time - start) / duration;

        if (timeFraction < 1) {
            let progress = easing(timeFraction, 'easeInQuad');

            const animateTo = from + (amountPerDuration * progress);

            currentAnimateTo = animateTo;
            currentTimeFraction = timeFraction;

            draw(animateTo);

        } else if (stop) {
            endTimeFraction = timeFraction - currentTimeFraction;

            if (endTimeFraction > 1) {
                endTimeFraction = 1;
            }

            let progress = easing(endTimeFraction, 'easeOutQuad');

            const animateTo = currentAnimateTo + ((endAnimateTo - currentAnimateTo) * progress);

            draw(animateTo);

        } else {
            let progress = timeFraction;

            const animateTo = from + (amountPerDuration * progress * 2);

            currentAnimateTo = animateTo;
            currentTimeFraction = timeFraction;

            draw(animateTo);

            if (endAnimateTo && endAnimateTo - animateTo <= amountPerDuration) {
                stop = true;
            }
        }

        if (endTimeFraction < 1) {
            requestAnimationFrame(anim);
        } else {
            if (complete !== undefined) {
                complete();
            }
        }
    });

    return {
        stop: function (val) {
            endAnimateTo = val;
        }
    };
}

function easing(timeFraction, ease) {
    switch (ease) {
        case 'easeInQuad':
            return quad(timeFraction);

        case 'easeOutQuad':
            return 1 - quad(1 - timeFraction);
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
}