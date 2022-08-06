const getBadge = function (name, tit) {
    if (tit.includes('\u2605') || tit.includes('★')) {
        return 'orange';
    }

    switch (name && name.toLowerCase()) {
        case 'базового класса':
            return 'silver';
        case 'засекреченное':
            return 'purple';
        case 'армейское качество':
            return 'blue';
        case 'запрещенное':
            return 'maline';
        case 'ширпотреб':
            return 'silver';
        case 'промышленное качество':
            return 'bluelight';
        case 'тайное':
            return 'red';
        case 'высшего класса':
            return 'blue';
        case 'примечательного типа':
            return 'purple';
        case 'экзотичного вида':
            return 'maline';
        case 'consumer grade':
            return 'silver';
        case 'контрабандное':
            return 'orange';
        case 'контрабанда':
            return 'orange';
        case 'экстраординарного типа':
            return 'red';
        case 'restricted':
            return 'maline';
        case 'mil-spec grade':
            return 'blue';
        case 'classified':
            return 'red';
        case 'industrial grade':
            return 'bluelight';
        case 'covert':
            return 'red';
        case 'high grade':
            return 'blue';
        case 'remarkable':
            return 'red';
        case 'extraordinary':
            return 'red';
        case 'exotic':
            return 'red';
        case 'base grade':
            return 'blue';
        case 'distinguished':
            return 'maline';
        case 'исключительный':
            return 'maline';
        case 'superior':
            return 'purple';
        case 'master':
            return 'red';
        case 'мастерский':
            return 'red';
        case 'заслуженный':
            return 'blue';
        case 'blue':
            return 'orange';
        case 'exceptional':
            return 'maline';
        case 'Нeoбычaйнo peдкиe':
            return 'orange';
        case '★':
            return 'orange';
        default:
            return 'silver';
    }
}

export const getBadgeClass = (name, tit) => 'case-badge__' + getBadge(name, tit);
export const getLineClass = (name, tit) => 'live-card__line__' + getBadge(name, tit);
export const getColorClass = (name, tit) => getBadge(name, tit);