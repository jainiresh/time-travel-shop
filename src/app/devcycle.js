import {setupDevCycle} from '@devcycle/nextjs-sdk/server'


const getUserIdentity = async () => {
    return {
        user_id: '1',
        email: 'niresh@gmail.com'
    }
}

const {getVariableValue, getClientContext} = setupDevCycle({
    clientSDKKey : process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
    serverSDKKey : process.env.NEXT_PUBLIC_DEVCYCLE_SERVER_SDK_KEY ?? '',
    options: {
        enableStreaming: false,
        eventFlushIntervalMS: 1000
    },
    userGetter: getUserIdentity, 
})

export { getVariableValue, getClientContext }