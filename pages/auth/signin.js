import {getProviders, signIn} from "next-auth/react"

export default function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
        <img className="hidden md:inline-flex object-cover md:w-44" src="/images/twitter-phone.png" alt="twitter-phone" />
        <div className="">
            {Object.values(providers).map((provider) => (
                <div className="flex flex-col items-center">
                    <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" 
                        alt="twitter-logo"
                        className="w-40 object-cover"
                     />
                    <p className="text-sm my-8">
                        This app was created solely for learning purposes
                    </p>
                    <button className="bg-red-400 text-white rounded-full px-6 py-3 hover:bg-red-500
                    shadow-md" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers,
        }
    }
}