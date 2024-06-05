import { Component } from "@angular/core";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html'
})
export class GraphComponent {
    lineChartData = [
        {
            name: 'Goles marcados',
            series: [
                { name: 'Partido 1', value: 2 },
                { name: 'Partido 2', value: 3 },
                { name: 'Partido 3', value: 1 },
                { name: 'Partido 4', value: 2 },
                { name: 'Partido 5', value: 2 },
                { name: 'Partido 6', value: 1 },
                { name: 'Partido 7', value: 1 },
            ]
        }
    ];
    barChartData = [
        { "name": 'Semana 1', "value": 15011121 },
        { "name": 'Semana 2', "value": 77833497 },
        { "name": 'Semana 3', "value": 126593378 },
        { "name": 'Semana 4', "value": 140084734 },
        { "name": 'Semana 5', "value": 141289926 },
        { "name": 'Semana 6', "value": 142508300 },
    ];
     
}
