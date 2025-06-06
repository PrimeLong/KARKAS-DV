const products = [
  {
    id: 1,
    images: [
      { src: "img/houses/house1.jpg", alt: "Круглогодичная беседка — общий вид" },
      { src: "img/houses/house2.jpg", alt: "Беседка, вид сбоку" },
      { src: "img/houses/house3.jpg", alt: "Беседка, интерьер" },
      { src: "img/houses/house4.jpg", alt: "Беседка зимой" },
      { src: "img/houses/house5.jpg", alt: "Беседка с освещением" },
      { src: "img/houses/house6.jpg", alt: "Круглогодичная беседка крупным планом" },
    ],
    title: "Круглогодичная беседка 35 кв.м.",
    description: "Просторная беседка с утеплением, подходит для использования круглый год. Индивидуальный проект, возможна доставка и монтаж.",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 2,
    images: [
      { src: "img/benches/bench1.jpg", alt: "Кованая скамейка" },
      { src: "img/benches/bench2.jpg", alt: "Скамейка чёрное дерево" },
      { src: "img/benches/bench3.jpg", alt: "Скамейка красное дерево" },
      { src: "img/benches/bench4.jpg", alt: "Скамейка на участке" },
      { src: "img/benches/bench5.jpg", alt: "Деталь ножки скамейки" },
      { src: "img/benches/bench6.jpg", alt: "Декорированная скамейка" },
    ],
    title: "Скамейки",
    description: "Кованые скамейки с уникальным дизайном. Подходят для садов, парков, дворов. Прочные, устойчивые к погоде.",
    price: "от 17 000₽",
  },
  {
    id: 3,
    images: [
      { src: "img/lavkas/lavka1.jpg", alt: "Лавочка кованая на даче" },
      { src: "img/lavkas/lavka2.jpg", alt: "Лавочка с ажурным узором" },
      { src: "img/lavkas/lavka3.jpg", alt: "Лавочка на детской площадке" },
      { src: "img/lavkas/lavka4.jpg", alt: "Кованая лавочка с деревянным сиденьем" },
      { src: "img/lavkas/lavka5.jpg", alt: "Уличная лавочка" },
      { src: "img/lavkas/lavka6.jpg", alt: "Лавочка, общий вид" },
    ],
    title: "Лавочки",
    description: "Лавочки ручной работы для вашего участка. Варианты исполнения и цвет на выбор.",
    price: "от 10 000₽",
  },
  {
    id: 4,
    images: [
      { src: "img/swings/swing1.jpg", alt: "Кованые качели в саду" },
      { src: "img/swings/swing2.jpg", alt: "Детали каркаса качелей" },
      { src: "img/swings/swing3.jpg", alt: "Качели на участке" },
      { src: "img/swings/swing4.jpg", alt: "Кованые качели, общий план" },
      { src: "img/swings/swing5.jpg", alt: "Качели крупным планом" },
      { src: "img/swings/swing6.jpg", alt: "Качели, вид сбоку" },
    ],
    title: "Качели кованые",
    description: "Надежные качели с красивыми элементами художественной ковки. Для детей и взрослых.",
    price: "от 72 000₽",
  },
  {
    id: 5,
    images: [
      { src: "img/gazebos/gazebo1.jpg", alt: "Беседка кованая с крышей" },
      { src: "img/gazebos/gazebo2.jpg", alt: "Детали узора на беседке" },
      { src: "img/gazebos/gazebo3.jpg", alt: "Беседка в саду" },
      { src: "img/gazebos/gazebo4.jpg", alt: "Беседка для пикника" },
      { src: "img/gazebos/gazebo5.jpg", alt: "Уютная беседка" },
      { src: "img/gazebos/gazebo6.jpg", alt: "Большая беседка" },
    ],
    title: "Беседки",
    description: "Беседки разных форм и размеров. Выполняем проекты под ключ.",
    price: "Цена и доставка рассчитываются индивидуально.",
  },
  {
    id: 6,
    images: [
      { src: "img/mangals/mangal1.jpg", alt: "Мангал кованый с крышей" },
      { src: "img/mangals/mangal2.jpg", alt: "Мангальная зона во дворе" },
      { src: "img/mangals/mangal3.jpg", alt: "Детали ковки на мангале" },
      { src: "img/mangals/mangal4.jpg", alt: "Печь для барбекю" },
      { src: "img/mangals/mangal5.jpg", alt: "Мангальная зона с декором" },
      { src: "img/mangals/mangal6.jpg", alt: "Мангал, общий план" },
    ],
    title: "Мангальные зоны, мангалы и печи",
    description: "Эксклюзивные мангальные зоны, кованые мангалы и печи любой сложности.",
    price: "Цена и доставка рассчитываются индивидуально.",
  },
  {
    id: 7,
    images: [
      { src: "img/entrances/entrance1.jpg", alt: "Кованое крыльцо" },
      { src: "img/entrances/entrance2.jpg", alt: "Входная группа, общий вид" },
      { src: "img/entrances/entrance3.jpg", alt: "Лестница на входе" },
      { src: "img/entrances/entrance4.jpg", alt: "Кованые перила" },
      { src: "img/entrances/entrance5.jpg", alt: "Крыльцо с навесом" },
      { src: "img/entrances/entrance6.jpg", alt: "Детали ковки на входе" },
    ],
    title: "Входные группы, Крыльцо",
    description: "Стильные и прочные входные группы и крыльцо, подчёркивают статус дома.",
    price: "Цена и доставка рассчитываются индивидуально.",
  },
  {
    id: 8,
    images: [
      { src: "img/fences/fence1.jpg", alt: "Кованый забор, общий вид" },
      { src: "img/fences/fence2.jpg", alt: "Ворота с ковкой" },
      { src: "img/fences/fence3.jpg", alt: "Калитка с ковкой" },
      { src: "img/fences/fence4.jpg", alt: "Забор с элементами ковки" },
      { src: "img/fences/fence5.jpg", alt: "Декоративный забор" },
      { src: "img/fences/fence6.jpg", alt: "Калитка на участке" },
    ],
    title: "Ворота, заборы, калитки",
    description: "Кованые ворота, калитки и заборы. Выполним под заказ в любом стиле.",
    price: "Цена и доставка рассчитываются индивидуально.",
  },
  {
    id: 9,
    images: [
      { src: "img/railings/railing1.jpg", alt: "Перила кованые на лестнице" },
      { src: "img/railings/railing2.jpg", alt: "Красивая лестница с перилами" },
      { src: "img/railings/railing3.jpg", alt: "Перила с завитками" },
      { src: "img/railings/railing4.jpg", alt: "Кованые перила, общий вид" },
      { src: "img/railings/railing5.jpg", alt: "Лестница с коваными элементами" },
      { src: "img/railings/railing6.jpg", alt: "Деталь кованых перил" },
    ],
    title: "Перила и лестницы",
    description: "Эстетика и безопасность — кованые перила и лестницы любой сложности.",
    price: "Цена и доставка рассчитываются индивидуально.",
  },
  {
    id: 10,
    images: [
      { src: "img/grids/grid1.jpg"},
      { src: "img/grids/grid2.jpg"},
      { src: "img/grids/grid3.jpg"},
      { src: "img/grids/grid4.jpg"},
      { src: "img/grids/grid5.jpg"},
      { src: "img/grids/grid6.jpg"},
    ],
    title: "Решетки на окна, балконы и цветочницы",
    price: "Стоимость рассчитывается индивидуально",
  },
  {
    id: 11,
    images: [
      { src: "img/terraces/terrace1.jpg"},
      { src: "img/terraces/terrace2.jpg"},
      { src: "img/terraces/terrace3.jpg"},
      { src: "img/terraces/terrace4.jpg"},
      { src: "img/terraces/terrace5.jpg"},
      { src: "img/terraces/terrace6.jpg"},
      { src: "img/terraces/terrace7.jpg"},
      { src: "img/terraces/terrace8.jpg"},
    ],
    title: "Автонавесы, Навесы, Террасы и Козырьки",
    price: "Стоимость рассчитывается индивидуально",
  },
  {
    id: 12,
    images: [
      { src: "img/barriers/barrier1.jpg"},
      { src: "img/barriers/barrier2.jpg"},
      { src: "img/barriers/barrier3.jpg"},
      { src: "img/barriers/barrier4.jpg"},
      { src: "img/barriers/barrier5.jpg"},
    ],
    title: "Ограждения",
    price: "Стоимость рассчитывается индивидуально",
  },
  {
    id: 13,
    images: [
      { src: "img/woodcutters/woodcutter1.jpg"},
      { src: "img/woodcutters/woodcutter2.jpg"},
      { src: "img/woodcutters/woodcutter3.jpg"},
      { src: "img/woodcutters/woodcutter4.jpg"},
      { src: "img/woodcutters/woodcutter5.jpg"},
      { src: "img/woodcutters/woodcutter6.jpg"},
    ],
    title: "Дровники и поленницы",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 14,
    images: [
      { src: "img/furnitures/furniture1.jpg"},
      { src: "img/furnitures/furniture2.jpg"},
      { src: "img/furnitures/furniture3.jpg"},
      { src: "img/furnitures/furniture4.jpg"},
      { src: "img/furnitures/furniture5.jpg"},
      { src: "img/furnitures/furniture6.jpg"},
      { src: "img/furnitures/furniture7.jpg"},
      { src: "img/furnitures/furniture8.jpg"},
      { src: "img/furnitures/furniture9.jpg"},
    ],
    title: "Мебель",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 15,
    images: [
      { src: "img/aviaries/aviary1.jpg"},
      { src: "img/aviaries/aviary2.jpg"},
      { src: "img/aviaries/aviary3.jpg"},
      { src: "img/aviaries/aviary4.jpg"},
      { src: "img/aviaries/aviary5.jpg"},
      { src: "img/aviaries/aviary6.jpg"},
    ],
    title: "Вольер для собак",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 16,
    images: [
      { src: "img/bonfires/bonfire1.jpg"},
      { src: "img/bonfires/bonfire2.jpg"},
      { src: "img/bonfires/bonfire3.jpg"},
      { src: "img/bonfires/bonfire4.jpg"},
      { src: "img/bonfires/bonfire5.jpg"},
    ],
    title: "Костровые чаши",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 17,
    images: [
      { src: "img/greenhouses/greenhouse1.jpg"},
      { src: "img/greenhouses/greenhouse2.jpg"},
      { src: "img/greenhouses/greenhouse3.jpg"},
      { src: "img/greenhouses/greenhouse4.jpg"},
      { src: "img/greenhouses/greenhouse5.jpg"},
      { src: "img/greenhouses/greenhouse6.jpg"},
    ],
    title: "Теплицы, грядки, садовая мебель",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 18,
    images: [
      { src: "img/metals/metal1.jpg"},
      { src: "img/metals/metal2.jpg"},
      { src: "img/metals/metal3.jpg"},
      { src: "img/metals/metal4.jpg"},
      { src: "img/metals/metal5.jpg"},
      { src: "img/metals/metal6.jpg"},
      { src: "img/metals/metal7.jpg"},
      { src: "img/metals/metal8.jpg"},
      { src: "img/metals/metal9.jpg"},
      { src: "img/metals/metal10.jpg"},
      { src: "img/metals/metal11.jpg"},
      { src: "img/metals/metal12.jpg"},
    ],
    title: "Металлоконструкции",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 19,
    images: [
      { src: "img/decors/decor1.jpg"},
      { src: "img/decors/decor2.jpg"},
      { src: "img/decors/decor3.jpg"},
      { src: "img/decors/decor4.jpg"},
      { src: "img/decors/decor5.jpg"},
      { src: "img/decors/decor6.jpg"},
      { src: "img/decors/decor7.jpg"},
      { src: "img/decors/decor8.jpg"},
      { src: "img/decors/decor9.jpg"},
      { src: "img/decors/decor10.jpg"},
      { src: "img/decors/decor11.jpg"},
      { src: "img/decors/decor12.jpg"},
    ],
    title: "Декор",
    price: "Цена и доставка рассчитываются индивидуально",
  },
  {
    id: 20,
    images: [
      { src: "img/accessories/accessories1.jpg"},
      { src: "img/accessories/accessories2.jpg"},
      { src: "img/accessories/accessories3.jpg"},
      { src: "img/accessories/accessories4.jpg"},
      { src: "img/accessories/accessories5.jpg"},
      { src: "img/accessories/accessories6.jpg"},
      { src: "img/accessories/accessories7.jpg"},
      { src: "img/accessories/accessories8.jpg"},
    ],
    title: "Аксессуары",
    price: "Цена и доставка рассчитываются индивидуально",
  },
];