interface Standard {
    title: string,
    date?: string,
    description?: string,
    link?: string,
}

const standards: Standard[] = [
    {
        title:"РЕЛИЗ 1.0: Производственная отчётность",
        date: "готово",
        description:
            `
                <p>Рекомендации по логированию и мониторингу временисотрудников
                и оформлению клиентской отчетности
                </p>
            `,
        link: "#",
    } as Standard,
    {
        title:"РЕЛИЗ 2.0: РЕЗЮМЕ СОТРУДНИКОВ",
        date: "~ 3 квартал",
        description:
            `
            <p>Набор лучших практик по оформлению,
            структуре и содержанию CV специалистов, а также ведению бенч-карт; 
            </p>
            ` ,
        link: "",
    } as Standard,
    {
        title:"РЕЛИЗ 3.0: ОНБОРДИНГ И ОФБОРДИНГ",
        date: "~ 4 квартал",
        description:
            `
            <p>Чек-листы и регламенты для плавного подключения к
            проекту на старте и последующего вывода специалиста при завершении сотрудничества
            </p>
            ` ,
        link: "",
    } as Standard,
];

export default standards;