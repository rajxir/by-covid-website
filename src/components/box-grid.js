import * as React from 'react'
import { Accordion} from 'react-bootstrap'

const BoxGrid = (props) => {
  return (
      <div class="w-60">
        <span class="anchor" id="structure"></span>
        <h2 class="mt-5">{props.boxGridTitle}</h2>
        <p class="mb-4">The project work is divided into <strong>8 Work Packages (WPs)</strong>:</p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3" class="bg-dark text-light">{props.box1Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box1Description}</p>
              <p><strong>WP leaders:</strong> {props.box1Names}</p>
              <div class="text-end lh-1">{props.box1Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3">{props.box2Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box2Description}</p>
              <p><strong>WP leaders:</strong> {props.box2Names}</p>
              <div class="text-end lh-1">{props.box2Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3" class="bg-dark text-light">{props.box3Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box3Description}</p>
              <p><strong>WP leaders:</strong> {props.box3Names}</p>
              <div class="text-end lh-1">{props.box3Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3">{props.box4Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box4Description}</p>
              <p><strong>WP leaders:</strong> {props.box4Names}</p>
              <div class="text-end lh-1">{props.box4Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3" class="bg-dark text-light">{props.box5Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box5Description}</p>
              <p><strong>WP leaders:</strong> {props.box5Names}</p>
              <div class="text-end lh-1">{props.box5Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3">{props.box6Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box6Description}</p>
              <p><strong>WP leaders:</strong> {props.box6Names}</p>
              <div class="text-end lh-1">{props.box6Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3" class="bg-dark text-light">{props.box7Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box7Description}</p>
              <p><strong>WP leaders:</strong> {props.box7Names}</p>
              <div class="text-end lh-1">{props.box7Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3">{props.box8Title}</Accordion.Header>
            <Accordion.Body className="pt-4">
              <p class="pt-2">{props.box8Description}</p>
              <p><strong>WP leaders:</strong> {props.box8Names}</p>
              <div class="text-end lh-1">{props.box8Subtext}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default BoxGrid