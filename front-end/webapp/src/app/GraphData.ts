import { Subject } from 'rxjs';

/**
 * Needs refinement
 */

export var graphData = new Subject<UpdateSeries>();

export var Graphs: GraphData[] = [];
export var ArchiveGraphs: GraphData[] = [];
export var parameternames:string[]=[];
export var parametertypes:string[]=[];
export var parameterEngTypes:string[]=[];

export var archiveGraphNames: string[] = [];
export var calls:number[]=[];
export var createdRealTimeGraphsQualifiedNames: string[] = [];
export var qualifiedParameterNames: string[] = [];  //storing the qualified names of the parameters inside the sidenav
export var callMatchingMap = new Map<number,string>(); //matches the key = qualifiedParam name to the according websoscket call

export interface GraphData {
    type: string;
    name: string;
    series: Series[];
}

export interface Series {
    name: Date;
    value: number;
}

export interface UpdateSeries {
    name: string;
    call: number;
    isOfType: boolean;
    value: Series;
}


export interface ngxData {
    data: [
        { 
            type: string;
            name: string;
            series: Series[];
        }
    ]
};

export var typesOfGraphs: string[] = ["integer", "float"];

export function addEngType(engValue: string) {
    parameterEngTypes.push(engValue);
}

export function newGraphs(data: any){
    Graphs.push(data);
}
export function newGraphSeries(index:number,data:any){
    Graphs[index].series.push(data);
}
export function newArchiveGraphs(data: any){
    ArchiveGraphs.push(data);
}

export function deleteGraph(type: string){
    let index = Graphs.findIndex(x => x.name == type);
    if(index != -1){
        Graphs.splice(index, 1);
    }
}

export function deleteArchiveGraph(type: string){
    let index = ArchiveGraphs.findIndex(x => x.name == type);
    if(index != -1){
        ArchiveGraphs.splice(index, 1);
    }
}

export var TelemetryData: GraphData[] = [];

export function initialTelemetryData(data:any){
    TelemetryData.push(data);
}

export function newTelemetryData(name:string, type:string, data: any){
    let index = TelemetryData.findIndex(x => x.name == name);
    if(index != -1){
        
        TelemetryData[index].type = type;
        TelemetryData[index].series[0] = data;
    }
}

export function addTelemetrySeries(name:string, data:any){
    let index = TelemetryData.findIndex(x => x.name == name);
    if(index != -1){
        TelemetryData[index].series.push(data);
    }
}


export var archiveData = [
    {
        type: "Housekeeping",
        name: "",
        series: [
            {
                name: new Date(),
                value: 0
            }
        ]
    }
]


export var Packet_Counter = [
    {
    series: [
        {
            value:0
        }
    ]
    } 
]