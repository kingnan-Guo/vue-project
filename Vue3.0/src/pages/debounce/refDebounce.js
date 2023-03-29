import { customRef } from "vue"
export function refDebounce (value, delay = 1000) {
    console.log('ref value ==', value, delay)
    var time
    return customRef((track, trigger) => {
        console.log("customRef track ==", track)
        return {
            get () {
                // 依赖收集 track()
                track()
                return value
            },
            set (val) {
                value = val
                clearTimeout(time)
                setTimeout(() => {
                    console.log("set ==", val);
                    // 派发更新 trigger()
                    trigger() 
                }, delay);
            }
        }
    })
}

// function ref(value) {
//     {
//         get () {
//             return value
//         },
//         set (val) {
//             value = val

//         },

//     }
// }