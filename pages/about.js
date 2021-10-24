import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
    return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <Typography mt={3} variant="h2" component="h2">
                    About
                </Typography>
                
                <Typography m={5} variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolorum aperiam sint quia, eligendi vitae, eveniet provident odio nulla id rerum, eius ipsa consequuntur molestias perspiciatis quibusdam velit reprehenderit dolore. Adipisci fugit suscipit doloremque sunt minima aspernatur quidem inventore placeat, possimus reiciendis tempora at aliquid consectetur sapiente cumque eum quia est natus vel eaque minus repellat? Reiciendis laboriosam rem autem, pariatur optio mollitia nihil harum perspiciatis sequi inventore excepturi, ex quos qui asperiores repellat alias delectus sit eaque iste aliquam quisquam dolore libero et magni. Officia iusto voluptatum doloribus dignissimos nisi, consequatur magnam, quos sit, dolorum tempore saepe reiciendis. Nemo?
                </Typography>
            </Box>
                
    )
}

export default About
