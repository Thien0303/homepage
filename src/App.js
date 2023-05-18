
import Header from './Common/Header'
import Carousels from './Common/Carousel/Carousel';
import { Box } from '@mui/material';
import FeaturedPost from './Common/FeaturePost';
import AppFeatures from './Common/FeatureApp';
import Pricing from './Common/Pricing';
import Footer from './Common/Footer';
function App() {
  return (
    <div>
      
      <Header/>
      <Box 
       flex={4}
       padding={8}>
      <Carousels/>
      </Box>
      <FeaturedPost/>
      <AppFeatures/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
