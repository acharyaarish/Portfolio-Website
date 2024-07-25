import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Animation variants for the experience cards
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Experience = () => {
  // Define color scheme based on the provided palettes
  const sectionBg = useColorModeValue('#F0F4F8', '#121212'); // Light background for light mode, darker for dark mode
  const sectionColor = useColorModeValue('#19181A', '#E2E8F0');
  const cardBg = useColorModeValue('#D8EBFB', '#2D3748'); // Light blue for light mode, dark for dark mode
  const cardHoverBg = useColorModeValue('#BFDFFB', '#3B3F44'); // Slightly darker blue for hover in light mode
  const headingColor = useColorModeValue('#206a5d', '#90EE90'); // Darker green for headings
  const textColor = useColorModeValue('#333333', '#E2E8F0');
  const secondaryTextColor = useColorModeValue('#555555', '#A0AEC0'); // Lighter gray for secondary text

  const experiences = [
    {
      logo: `${process.env.PUBLIC_URL}/img/austriathlon-logo.png`,
      date: 'March 2024 – July 2024',
      company: 'AusTriathlon',
      location: 'Canberra, Australia',
      title: 'Data Analyst Intern',
      description: [
        'Worked under the guidance of a coach involved with the Australian Olympic team, gaining valuable insights into high-level athletic performance analysis.',
        'Generated detailed visual reports on race laps and athlete performance metrics, aiding coaches in strategic planning and performance enhancement.',
        'Utilized R and Power BI to automate the processing of cycling race data generated from power meter',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/shoesandsox-logo.png`,
      date: 'July 2022 – May 2024',
      company: 'Shoes and Sox',
      location: 'Canberra, Australia',
      title: 'Sales',
      description: [
        'Sharpened communication, interpersonal, and negotiating skills, leading to improved customer interactions and satisfaction.',
        'Utilized data science techniques to analyze customer behavior and preferences, which informed the creation of a successful customer loyalty program, boosting repeat business.',
        'Optimized store hours and implemented cost-cutting measures, enhancing overall business efficiency.',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/nepaloilcorp-logo.png`,
      date: 'November 2020 – November 2021',
      company: 'Nepal Oil Corporation',
      location: 'Kathmandu, Nepal',
      title: 'IT Support',
      description: [
        'Key contributor to Nepal\'s first ERP implementation project.',
        'Provided SAP Business One support and training for non-technical staff.',
        'Implemented ERP systems and managed ITIL practices, streamlining operations.',
        'I led a team to manage IT systems and oversee networking across multiple branches, ensuring seamless business operations.',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/outsource-array-logo.png`,
      date: 'November 2019 – February 2020',
      company: 'Outsource Array',
      location: 'Kathmandu, Nepal',
      title: 'Network Engineer Intern',
      description: [
        'Gained hands-on experience in implementing LAN/WAN, configuring networking devices, and modernizing office systems to meet current technological standards.',
        'Provided tailored access control based on user roles to enhance security and operational efficiency',
        'Created VLANs to segment network traffic and improve overall infrastructure reliability.',
        'Ensured optimal performance by regularly analyzing routers and switches.',
      ],
    },
  ];

  return (
    <Box as="section" bg={sectionBg} color={sectionColor} py={12} id="experience">
      <Container maxW="container.xl" textAlign="center" pt={4} pb={16}>
        <Heading as="h2" size="xl" mb={8} color={headingColor}>
          Experience 👨‍💻
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
            >
              <Box
                bg={cardBg}
                color={textColor}
                p={8} // Increased padding inside the container
                borderRadius="lg"
                boxShadow="lg"
                _hover={{ bg: cardHoverBg }}
                transition="background-color 0.3s, transform 0.3s"
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Flex align="center" mb={4}>
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    borderRadius="full"
                    boxSize="80px"
                    mr={4}
                    objectFit="contain"
                  />
                  <Box textAlign="left">
                    <Text fontWeight="bold" fontSize="lg" color={textColor}>
                      {experience.company}
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      {experience.location}
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      {experience.date}
                    </Text>
                  </Box>
                </Flex>
                <Box textAlign="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                    {experience.title}
                  </Text>
                </Box>
                <Box as="ul" pl={4} mt={2} color={textColor} textAlign="left">
                  {experience.description.map((desc, i) => (
                    <Text as="li" mb={2} key={i} display="flex" alignItems="center">
                      <Box as="span" color={headingColor} mr={2}>•</Box> {desc}
                    </Text>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Experience;
