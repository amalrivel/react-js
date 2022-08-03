import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WhyUs = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6" id="FAQ">
      <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid-flow-row">
        <div className="lg:col-span-2 md:col-span-1">
          <p className="text-2xl font-bold">Frequently Asked Question</p>
          <p className="font-bold my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="lg:col-span-3 md:col-span-2">
          {props.FAQcontent.map((item) => (
            <Accordion
              expanded={props.expanded === `panel${item.no}`}
              onChange={props.handleChange(`panel${item.no}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.no}bh-content`}
                id={`panel${item.no}bh-header`}
              >
                <p className="font-bold text-sm">{item.summary}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque condimentum elementum venenatis. Mauris erat nunc,
                  pretium ac erat at, volutpat congue urna. Praesent vehicula
                  nulla.
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
