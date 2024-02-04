export default function About() {
  return (
    <>
    <div className={"flex flex-col space-y-5 mx-32 mt-5"}>
      <h1 className={"font-bold text-2xl mb-3"}>
        Inspiration
      </h1>
          
      As college students embarking on a journey for higher education, the pangs of homesickness can be quite profound, particularly for international students like ourselves. Motivated by the desire to preserve the precious memories of our time spent both at home and in college, we conceived the idea of creating a time capsule.
      <h1 className={"font-bold text-2xl mb-3"}>
      What it does
      </h1>
      The website "CapSoul" is an online platform where customers can preserve their memory and send letters to their future selves. Customers can select dates to receive their letters and photos. Their archived memories accumulate in their personalized memory space, allowing them to reflect on their unforgettable moments. CapSoul offers a unique experience where you can immortalize your thoughts and sentiments through personal letters and photos. With CapSoul, words become a lasting legacy, creating a bridge between your past and future self.
      <h1 className={"font-bold text-2xl mb-3"}>
      How we built it
      </h1>
      We built our project with next js as the frontend and ASP .Net as backend REST API. We used the TailwindCSS component library for styling and a bit of daisyui. It asks users to upload contents such as text, image and mp3 which is then “send to space” and will be retrieved on a later date.
      <h1 className={"font-bold text-2xl mb-3"}>
      Challenges we ran into
      </h1>
      We struggled with github management. We encountered several issues on merge conflict and data loss. We also had to deal with backend and frontend integration issues such as COR and matching form data to the schema of the API.
      <h1 className={"font-bold text-2xl mb-3"}>
      Accomplishments that we're proud of
      </h1>
      We are very proud that we were able to complete quite a portion of the project and were able to collaborate with each other pretty well.
      <h1 className={"font-bold text-2xl mb-3"}>
      What we learned
      </h1>

      We were able to improve our problem solving skills through participating in this hackathon. We also learned some specific coding skills including advanced use of next js through this hackathon. We were pushed out of our comfort zone to think quickly and ensure efficient decision making.
      
      <h1 className={"font-bold text-2xl mb-3"}>
      What's next for CapSoul
      </h1>

      This website is still halfway through its development. It will launch a more extensive and ambitious service once we have gathered a sufficient number of customers. Once we obtain enough data from customers, we plan to utilize generative AI to predict future letters by training the AI. That’s how we provide customers with an amazing time-travel experience, going back and forth between the past and future.
    </div>
    </>
  )
}
