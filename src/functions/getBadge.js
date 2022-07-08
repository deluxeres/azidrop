const getBadge = function (name) {
    switch (name && name.toLowerCase()) {
        case 'базового класса':
            return 'silver';
        case 'засекреченное':
            return 'silver';
        case 'армейское качество':
            return 'silver';
        case 'запрещенное':
            return 'silver';
        case 'ширпотреб':
            return 'blue';
        case 'промышленное качество':
            return 'blue';
        case 'тайное':
            return 'blue';
        case 'высшего класса':
            return 'blue';
        case 'примечательного типа':
            return 'purple';
        case 'экзотичного вида':
            return 'purple';
        case 'consumer grade':
            return 'purple';
        case 'контрабандное':
            return 'purple';
        case 'контрабанда':
            return 'purple';
        case 'экстраординарного типа':
            return 'purple';
        case 'restricted':
            return 'red';
        case 'mil-spec grade':
            return 'red';
        case 'classified':
            return 'red';
        case 'industrial grade':
            return 'red';
        case 'covert':
            return 'red';
        case 'high grade':
            return 'red';
        case 'remarkable':
            return 'red';
        case 'extraordinary':
            return 'red';
        case 'exotic':
            return 'red';
        case 'base grade':
            return 'orange';
        case 'distinguished':
            return 'orange';
        case 'исключительный':
            return 'orange';
        case 'superior':
            return 'orange';
        case 'master':
            return 'orange';
        case 'мастерский':
            return 'orange';
        case 'заслуженный':
            return 'orange';
        case 'превосходный':
            return 'orange';
        case 'exceptional':
            return 'orange';
        default:
            return 'silver';
    }
}

export const getBadgeClass = (name) => 'case-badge__' + getBadge(name); 