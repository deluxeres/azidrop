const getBadge = function (name, tit) {
    if (tit.includes('\u2605') || tit.includes('★')) {
        return 'orange';
    }

    return name ? name : 'silver';
}

export const getBadgeClass = (name, tit) => 'case-badge__' + getBadge(name, tit);
export const getLineClass = (name, tit) => 'live-card__line__' + getBadge(name, tit);
export const getColorClass = (name, tit) => getBadge(name, tit);