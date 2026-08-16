
    export const requiresInterlinking = (flowNumber:number)=>{
        if([2,3,6,7].includes(flowNumber)){
            return true
        }
    }

    export const isGenerationOnly = (flowNumber:number)=>{
        if([6,7].includes(flowNumber)){
            return true
        }
    }

    export const hasGenerationPhase = (flowNumber:number)=>{
        if([2,3,6,7].includes(flowNumber)){0
            return true
        }
    }
    export const isActiveFlow = (flowNumber:number)=>{
        if([1,2,3,6,7].includes(flowNumber)){
            return true
        }
    }