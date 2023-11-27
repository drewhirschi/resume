import { Box, Center, Container, Divider, Group, List, ListItem, Text, Title } from "@mantine/core";

import Link from "next/link";
import { Metadata } from "next";

function SectionHeader({ title }: { title: string }) {
  return (
    <Box mt={"md"}>
      <Title order={4}>{title}</Title>
      <Divider variant="solid" />
    </Box>
  );
}

function ExperienceHeader({ company, location, }: { company: string, location: string, }) {


  return (

    <Group justify="space-between" mt={"md"}>

      <Title order={4}>{company}</Title>
      <Text>
        {location}
      </Text>
    </Group>


  );
}

function PostitionHeld({ position, timeline }: { position: string, timeline: string }) {
  return <Group justify="space-between">

    <Text fs="italic">{position}</Text>
    <Text>{timeline}</Text>
  </Group>
}

const data = {
  experience: [
    {
      companyName: "Microsoft Corporation",
      location: "Redmond, WA",
      positions: [
        {
          name: "Software Engineer, level 60",
          timeline: "Sept 2021 - Sept 2023",
          bullets: [
            "Built the React/TypeScript UI for Baseline Authoring and Deployment Plans in the Microsoft Lighthouse product. These features were critical in proving the strategic viability of Lighthouse.",
            "Rated “Greatly exceeded expectations” by manager for effectively collaborating with product managers and designers to exceed customer expectations.",
            "Proven ability to write efficient, reliable, and readable code that is easy to maintain and debug.",
            "Improved teams code quality by mentoring other developers in writing high-quality idiomatic React."
          ]
        },
        {
          name: "Software engineer intern",
          timeline: "June 2020 - Sept 2020",
          bullets: [
            "Rebuilt a portion of Microsoft Lighthouse within Microsoft Teams to provide a more collaborative experience for the end user. The prototype was demoed to multiple partners. The app was implemented with React/Typescript, Azure Functions, Cosmos DB, Azure Storage, and Azure Active Directory.",
            "Wrote and deployed a .NET Core Azure App Service to help with team's load and performance testing after finishing the scoped internship project."
          ]
        }
      ]
    }
  ]
}

export const metadata: Metadata = {
  title: "Andrew Hirschi",
  description: "Andrew's resume",
}

export default function Resume() {
  return <Container py={"lg"} size={"sm"}>
    <Center>

      <Title order={1}>Andrew Hirschi</Title>
    </Center>

    <Center>

      <Text>(206) 334-3694 | <Link href={"mailto:ashirsc@gmail.com"}>ashirsc@gmail.com</Link></Text>
    </Center>

    {/* {Object.entries(data).map(([key, section]) => {
      return <div>
        <SectionHeader title={key.toUpperCase()} />
        {section.map((experienceAtCompany) => {
          return <div>
            <ExperienceHeader company={experienceAtCompany.companyName} location={experienceAtCompany.location} />
            {experienceAtCompany.positions.map((position) => {
              return <div>
                <PostitionHeld position={position.name} timeline={position.timeline} />
                <List>
                  {position.bullets.map((bullet) => (<ListItem key={bullet}>{bullet}</ListItem>))}
                </List>
              </div>
            })}
          </div>
        })}
      </div>
    })} */}


    <SectionHeader title="EDUCATION" />
    <ExperienceHeader company="Brigham Young University" location="Provo, UT" />
    <PostitionHeld position="Bachelor of Science, Computer Science, Emphasis in Software Engineering" timeline="April 2021" />



    <SectionHeader title="EXPERIENCE" />
    <ExperienceHeader company="Microsoft Corporation" location="Redmond, WA" />
    <PostitionHeld position="Software Engineer, level 60" timeline="Sept 2021 - Sept 2023" />
    <List>

      <ListItem>
        Built the React/TypeScript UI for Baseline Authoring and Deployment Plans in the Microsoft Lighthouse product. These features were critical in proving the strategic viability of Lighthouse.
      </ListItem>
      <ListItem>
        Rated “Greatly exceeded expectations” by manager for effectively collaborating with product managers and designers to exceed customer expectations.
      </ListItem>
      <ListItem>
        Proven ability to write efficient, reliable, and readable code that is easy to maintain and debug.
      </ListItem>
      <ListItem>
        Improved teams code quality by mentoring other developers in writing high-quality idiomatic React.
      </ListItem>
    </List>

    <PostitionHeld position="Software engineer intern" timeline="June 2020 - Sept 2020" />

    <List>
      <ListItem>

        Rebuilt a portion of Microsoft Lighthouse within Microsoft Teams to provide a more collaborative experience for the end user. The prototype was demoed to multiple partners. The app was implemented with React/Typescript, Azure Functions, Cosmos DB, Azure Storage, and Azure Active Directory.
      </ListItem>
      <ListItem>
        {"Wrote and deployed a .NET Core Azure App Service to help with team's load and performance testing after finishing the scoped internship project."}

      </ListItem>
    </List>

    <ExperienceHeader company="DNJ Solutions LLC" location="Lehi, UT" />
    <PostitionHeld position="Partner/Data Engineer" timeline="May 2021 - March 2023" />
    <List>
      <ListItem>
        Implemented a marketing data pipeline that ingested more than 200,000 orders valued at more than $200 million for the client.
      </ListItem>
      <ListItem>
        Actively sought out opportunities to build trust and confidence with customers, consistently going above and beyond to ensure their satisfaction.
      </ListItem>
      <ListItem>
        {"Assessed customers' rough ideas and provided constructive feedback, identifying potential flaws and offering solutions to address them."}
      </ListItem>
    </List>

    <ExperienceHeader company="Amazon.com, Inc" location="Seattle, WA" />
    <PostitionHeld position="Software Development Engineer Intern" timeline="Jun 2019 - Aug 2019" />
    <List>
      <ListItem>
        Built a React/TypeScript frontend deployed to AWS S3 and Lambda to allow users to easily generate proprietary big data jobs on AWS Step Functions and Amazon EMR.
      </ListItem>
      <ListItem>
        Won an award for best customer obsession out of a cohort of 30 interns.
      </ListItem>
    </List>

    <PostitionHeld position="Software Development Engineer Intern" timeline="Jun 2018 - Aug 2018" />
    <List>
      <ListItem>
        {"Developed a Java service that mitigated dependencies and reduced client's software deployment from days to hours using multiple AWS tools such as S3, DynamoDB, and EC2."}
      </ListItem>
      <ListItem>
        Built a pipeline to automate deployment of client software while performing testing, provisioning AWS hosts, and integrating with other internal services.
      </ListItem>
    </List>

    <ExperienceHeader company="ControlAlt Investing" location="Provo, UT" />
    <PostitionHeld position="Co-founder" timeline="Nov 2018 - Sept 2020" />
    <List>
      <ListItem>
        {"Won both BYU's Business Model Competition and New Venture Challenge while competing against more than 60 other student teams."}
      </ListItem>
      <ListItem>
        Architected service and development operations to automate interactions between IRA custodians and online alternative asset vendors. Led a team of 4 engineers in the buildout of service and DevOps.
      </ListItem>
    </List>



  </Container>;
}
