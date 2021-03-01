import logo from './../logo.png'
import { newContextComponents } from "@drizzle/react-components"
import { DrizzleContext } from "@drizzle/react-plugin"

const { AccountData, ContractData, ContractForm } = newContextComponents

const DisplayTagline = () => (
    <DrizzleContext.Consumer>
        {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;
            if (!initialized) {
                return (
                    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center text-center sm:py-12">
                <div className="text-2xl text-red-600">Loading...</div>
                </div>
                )
            }

    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                    <div>
                        <img src={logo} className="mx-auto h-20 sm:h-20" alt="logo"/>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 text-center">
                        <p><span className="text-xl font-bold text-cyan-700">Account and It's Balance: </span> 
                        <AccountData
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            accountIndex={0}
                            units="ether"
                            precision={3}
                            />
                            </p>
                        <p><span className="text-xl font-bold text-cyan-700">Tagline: </span> 
                        <ContractData
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            contract="DisplayTagline"
                            method="tagline"
                        />
                        </p>
                        </div>
                        <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 text-center">
                        <ContractForm 
                            drizzle={drizzle} 
                            drizzleState={drizzleState}
                            contract="DisplayTagline" 
                            method="update"
                            />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}}
</DrizzleContext.Consumer>
)
export default DisplayTagline;
