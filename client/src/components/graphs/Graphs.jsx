import React, { useState, useEffect } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


export const Graphs = ({ repoURL }) => {
    const [language, setLanguage] = useState();
    const [graphData, setGraphData] = useState();
    const languageArr = [];

    useEffect(() => {
        (
            async () => {
                const response_repo = await fetch(repoURL);
                const data_repo = await response_repo.json();

                data_repo.map((data) => {
                    return data.language && languageArr.push(data.language);
                })
                setLanguage(languageArr);
            }
        )();

    }, [repoURL]);


    useEffect(() => {

        if (language !== undefined) {
            const languageObj = language.reduce((total, item) => {
                if (!total[item]) {
                    total[item] = { name: item, y: 0 };
                }
                total[item] =
                {
                    ...total[item],
                    y: total[item].y + 1
                }
                    ;
                return total;
            }, {});
            const data = Object.values(languageObj)
            setGraphData(data);
        }

    }, [language])






    const initialOptions = {
        title: { text: "Languages" },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                },
            }
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f} projects</b><br/>'
        },
        legend: { enabled: false },
        series: [
            {
                name: "Share",
                colorByPoint: true,
                data: graphData,
            }
        ],

    };


    return (
        <div className="graphs">
            <HighchartsReact
                highcharts={Highcharts}
                options={initialOptions} />
        </div>
    )
}
