interface Webinar {
    title: string,
    link: string,
    duration: string,
    description?: string,
}

const webinars: Webinar[] = [
    {
        title:"Вебинар 1",
        duration: "1:12:01",
        description:
            `
            <p>Рекомендации по логированию и мониторингу времени сотрудников
            и оформлению клиентской отчетности
            </p>
            `,
        link: "",
    },
    {
        title:"Вебинар 2",
        duration: "2:35:12",
        description:
            `
            <p>Набор лучших практик по оформлению,
            структуре и содержанию CV специалистов, а также ведению бенч-карт; 
            </p>
            ` ,
        link: "",
    },
    {
        title:"Вебинар 3",
        duration: "0:38:54",
        description:
            `
            <p>Чек-листы и регламенты для плавного подключения к
            проекту на старте и последующего вывода специалиста при завершении сотрудничества
            </p>
            ` ,
        link: "",
    },
];

export default webinars;