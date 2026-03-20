import { Box, Center, Container, Divider, Group, List, ListItem, Stack, Text, Title } from "@mantine/core";

import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import type { SVGProps } from "react";

const Github = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 256 250" width="1.5em" height="1.5em" fill="#000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" /></svg>;

function SectionHeader({ title }: { title: string }) {
  return (
    <Box mt={"lg"}>
      <Title order={4} style={{ letterSpacing: "0.08em" }}>{title.toUpperCase()}</Title>
      <Divider variant="solid" />
    </Box>
  );
}

function CompanyExperience({ company, location, children }: { company: string, location: string, children?: React.ReactNode }) {

  return (
    <Stack gap={0}>
      <Group justify="space-between" mt={"lg"}>
        <Title order={4}>{company}</Title>
        <Text>
          {location}
        </Text>
      </Group>

      {children}
    </Stack>
  );
}

function PostitionHeld({ position, timeline }: { position: string, timeline: string }) {
  return <Box>

    <Group justify="space-between">

      <Text fs="italic" fw={450}>{position}</Text>
      <Text>{timeline}</Text>
    </Group>
  </Box>
}

function BulletPoints({ bullets }: { bullets: string[] }) {
  return <List>
    {bullets.map((b, i) => (<ListItem key={i}>{b}</ListItem>))}
  </List>
}



export const metadata: Metadata = {
  title: "Andrew Hirschi",
  description: "Andrew's resume",
}

export default function Resume() {
  return <Container py={"lg"} size={720}>
    <Center>

      <Title order={1}>Andrew Hirschi</Title>
    </Center>

    <Center>

      <Text>(206) 334-3694 | <Link href={"mailto:ashirsc@gmail.com"}>ashirsc@gmail.com</Link></Text>
      <Box ml={"sm"}>
        <Link href={"https://github.com/drewhirschi"} target="_blank" ><Github /></Link>
      </Box>
    </Center>

    <Center>
      <Text>Kirkland, WA</Text>
    </Center>



    <SectionHeader title="EDUCATION" />
    <CompanyExperience company="Brigham Young University" location="Provo, UT" />
    <PostitionHeld position="Bachelor of Science, Computer Science, Emphasis in Software Engineering" timeline="Apr 2021" />



    <SectionHeader title="EXPERIENCE" />


    <CompanyExperience company="Enzo Health" location="Lehi, UT" >
      <PostitionHeld position="Senior AI Engineer" timeline="Jan 2025 – Present" />
      <BulletPoints bullets={[
        "Led 4 engineers to build the intake platform that became the foundation of Enzo's EHR, replacing manual workflows with an end-to-end system that improved onboarding speed, accuracy, and visibility for clinical and leadership teams.",
        "Built a clinical document pipeline that processes messy referral packets (faxes, handwritten notes, inconsistent formats) through two stages: a third-party OCR/extraction service for structured data, then an LLM-powered reconciliation layer that resolves conflicting and outdated information — deduplicating medication lists against a drug database, synthesizing a patient story with diagnosis codes from raw clinical notes, and filtering stale records to produce a current patient profile. Validated accuracy through human review workflows and iterative refinement from clinical team feedback.",
        "Architected Enzo's workflow engine after recognizing that AI extraction alone wasn't enough — clinicians still had to manually transfer results into their EHR. Built a DAG-based orchestration system with an event-driven executor: referrals arrive from any source (email, fax, portals), trigger the document pipeline, and flow through a graph of automated and human-in-the-loop nodes — with automatic fallbacks that degrade gracefully (e.g., failed insurance verification spawns a human task with the UI context needed to complete it manually). Built a drag-and-drop workflow configurator so a technical team can onboard new customers with zero code changes, wiring together node types with typed inputs and outputs to match each customer's intake operations.",
        "Built integrations with 4 EHR and referral systems — WellSky, Pennant, Strata, and CarePort — enabling bidirectional exchange for referrals, patient creation, clinical summaries, and episode data.",
      ]} />
    </CompanyExperience>

    <CompanyExperience company="Doma Data, Inc" location="Kirkland, WA" >
      <PostitionHeld position="Founder & CEO" timeline="Oct 2023 – Jan 2025" />
      <List>
        <ListItem>
          {"Built Parsl to assist legal M&A due diligence. Parsl uses a custom PDF to XML pipeline to scan contracts for red flags with LLMs. The LLM output is transformed into highlights that are overlaid on the pdf in a custom pdf web viewer where lawyers can verify results. This project was built with NextJS, Supabase(postgres), OpenAI, and TypeScript."}
        </ListItem>
        <ListItem>
          {"Built Doma to assist investment bankers with market research. Doma uses a distributed backend to scrape hundreds of thousands of webpages quickly to gather details about companies. LLMs synthesize this information into company profiles that can be indexed and used to find competitors and potential acquirers. Doma is built with NextJS, Supabase(postgres), OpenAI, BullMQ, Docker, and TypeScript."}
        </ListItem>
        <ListItem>
          Ran a service for a marketing agency that processed over 1000 phone calls per month. The service web scraped phone call recordings with Playwright, extracted insights with OpenAI GPT-4 family models, and pushed results via API to the customer CRM.
        </ListItem>
        <ListItem>
          Interviewed for Y Combinator W25 batch.
        </ListItem>
      </List>
    </CompanyExperience>

    <CompanyExperience company="Microsoft Corporation" location="Redmond, WA" >

      <PostitionHeld position="Software Engineer, level 60" timeline="Sep 2021 – Sep 2023" />
      <List>
        <ListItem>
          Led effort to build dynamically generated UI with React and TypeScript in Microsoft Lighthouse Baselines. All dynamic components had to support three role-based renderings and be fully configurable in the backend.
        </ListItem>
        <ListItem>
          {"Rated \"Greatly exceeded expectations\" by manager both years for effectively collaborating with product managers and designers to meet deadlines while exceeding customer expectations."}
        </ListItem>
        <ListItem>
          Built an end-to-end testing framework with Playwright that handled MFA auth.
        </ListItem>
      </List>

      <PostitionHeld position="Software Engineer Intern" timeline="May 2020 – Aug 2020" />
      <List>
        <ListItem>
          Rebuilt a portion of Microsoft Lighthouse within Microsoft Teams to provide a more collaborative experience for the end user. The prototype was demoed to multiple partners. The app was implemented with React/TypeScript, Azure Functions, Cosmos DB, Azure Storage, and Azure Active Directory.
        </ListItem>
        <ListItem>
          {"Wrote and deployed a .NET Core Azure App Service to help with team's load and performance testing after finishing the scoped internship project 6 weeks early."}
        </ListItem>
      </List>
    </CompanyExperience>

    <CompanyExperience company="DNJ Solutions LLC" location="Lehi, UT" >
      <PostitionHeld position="Partner/Data Engineer" timeline="May 2021 – Mar 2023" />
      <List>
        <ListItem>
          Implemented a marketing data pipeline that ingested more than 200,000 orders valued at over $200 million for a client. Used Fivetran for common marketing channels and AWS Lambda/S3 for custom ETL.
        </ListItem>
      </List>
    </CompanyExperience>

    <CompanyExperience company="Aptive Environmental" location="Nashville, TN" >
      <PostitionHeld position="Summer Sales Representative" timeline="May 2021 – Jun 2021" />
      <List>
        <ListItem>
          Consistently met or exceeded daily sales goals, selling door-to-door ten hours a day.
        </ListItem>
        <ListItem>
          Runner up for top rookie salesman in region.
        </ListItem>
        <ListItem>
          Learned to establish trust with customers and be an expert on the product during a six-week employment contract.
        </ListItem>
      </List>
    </CompanyExperience>


    <CompanyExperience company="Amazon.com, Inc" location="Seattle, WA" >
      <PostitionHeld position="Software Development Engineer Intern" timeline="Jun 2019 – Aug 2019" />
      <List>
        <ListItem>
          Built a React/TypeScript frontend deployed to AWS S3 and Lambda to allow users to easily generate proprietary big data jobs on AWS Step Functions and Amazon EMR.
        </ListItem>
        <ListItem>
          {"Won an award for best \"Customer Obsession\" out of a cohort of 30 interns."}
        </ListItem>
      </List>

      <PostitionHeld position="Software Development Engineer Intern" timeline="Jun 2018 – Aug 2018" />
      <List>
        <ListItem>
          {"Developed a Java service that mitigated dependencies and reduced client's software deployment from days to hours using multiple AWS tools such as S3, DynamoDB and EC2."}
        </ListItem>
        <ListItem>
          Built a pipeline to automate deployment of client software while performing testing, provisioning AWS hosts and integrating with other internal services.
        </ListItem>
      </List>
    </CompanyExperience>


    <CompanyExperience company="ControlAlt Investing" location="Provo, UT" >
      <PostitionHeld position="Co-founder" timeline="Nov 2018 – Sep 2020" />
      <List>
        <ListItem>
          {"Won both BYU's Business Model Competition and New Venture Challenge while competing against more than 60 other student teams."}
        </ListItem>
        <ListItem>
          Led a team of 4 student engineers to build service and development operations of a product to automate interactions between IRA custodians and online alternative asset vendors. The product used a static React frontend deployed to AWS S3 and a NodeJS AWS Lambda microservice backend with DynamoDB.
        </ListItem>
      </List>
    </CompanyExperience>

    <CompanyExperience company="Crocker Innovation Fellowship" location="Provo, UT" >
      <PostitionHeld position="Engineering Lead" timeline="Jan 2019 – Dec 2019" />
      <List>
        <ListItem>
          Designed and built a full stack application with a Flutter frontend and backend built on AWS Lambda, DynamoDB, Cognito and S3.
        </ListItem>
        <ListItem>
          Led planning and execution of an electrical and a mechanical engineer to create an anti-theft IOT device for small construction companies.
        </ListItem>
        <ListItem>
          Identified pains, customer segment, and solutions through talking to 100+ potential customers.
        </ListItem>
      </List>
    </CompanyExperience>


    <SectionHeader title="VOLUNTEER SERVICE" />
    <CompanyExperience company="The Church of Jesus Christ of Latter-Day Saints" location="Chicago, IL" >
      <PostitionHeld
        position="Volunteer Missionary"
        timeline="Feb 2015 – Feb 2017"
      />

      <List>
        <ListItem>
          {"Trained groups of 40+ peers in dynamic communication, teaching, and organizational skills."}
        </ListItem>
        <ListItem>
          {"Became fluent in Spanish to communicate effectively with Mexican and Latin immigrants."}
        </ListItem>
      </List>
    </CompanyExperience>

    <SectionHeader title="PERSONAL" />
    <List>
      <ListItem>
        Eagle Scout
      </ListItem>
      <ListItem>
        Fluent in Spanish
      </ListItem>
    </List>



  </Container>;
}
