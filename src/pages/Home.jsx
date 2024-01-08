import ArticleOverwiew from "../components/ArticleOverwiew"
import FadeIn from "../components/FadeIn"
import Hero from "../components/Hero"
import Reviews from "../components/Reviews"
import ScaleIn from "../components/ScaleIn"
// import SlideIn from "../components/SlideIn"

const Home = () => {
  return (
    <>
    <FadeIn>
      <Hero/>
    </FadeIn>
    <ScaleIn>
      <ArticleOverwiew/>
    </ScaleIn>
    <FadeIn>
      <Reviews/>
    </FadeIn>
            
    </>
  )
}

export default Home