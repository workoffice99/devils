import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Model1 from "../../Assets/model1.jpg";
import Modal from "react-bootstrap/Modal";

import "./Blog.css";

export default function Blog() {
  //model left
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //model right
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <div className="container">
      <div className="row">
        <div class="col-12 col-lg-12" Style="font-size: 20px;padding-left:0;">
          <span>More things about the devil</span>
        </div>
        <div class="col-12 col-lg-12" Style="font-size: 45px;padding-left:0; ">
          Read
        </div>
      </div>
      <div class="row justify-content-around p-3">
        <div class="leftSide col-12 col-sm-12 col-md-12 col-lg-5 text-white p-5 ">
          <span>Fun Facts About Tasmanian Devils !</span>
          <div className="bg-dark h-75 opacity-75 p-3 ">
            <p Style="font-size:1rem">
            Discover the myths, truths and totally wild trivia of these mysterious marsupials.
Among Australia's collection of one-of-a-kind creatures, the Tasmanian “Tassie” devil is high on the list of stand-out members. Get ready to become an expert on these elusive, sometimes misunderstood cheeky little devils.
{" "}
            </p>
            <button
              type="button"
              onClick={handleShow}
              class="btn btn-light btn-lg opacity-75 text-bold"
            >
              See more...
            </button>
          </div>
        </div>
        <div class="rightSide col-12 col-sm-12 col-md-12 col-lg-5 p-3 text-white p-5">
          {" "}
          <span>Brief about tasmanian devil</span>
          <div className="bg-dark h-75 opacity-75 p-3">
            <p Style="font-size:1rem">
            The world's largest surviving carnivorous marsupial, the Tasmanian devil, has a thick-set, squat build, with a relatively large, broad head and short, thick tail. The fur is mostly black, with white markings on the rump, flanks and chest which vary in size and shape; some devils are pure black.{" "}
            </p>
            <button
              type="button"
              onClick={handleShow1}
              class="btn btn-light btn-lg opacity-75 text-bold"
            >
              See more..
            </button>
          </div>
        </div>
      </div>
      {/* model left */}
      <div class="modal-dialog modal-xl">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          size="xl"
        >
          <Modal.Header closeButton onHide={handleClose}>
            <Modal.Title> FUN FACTS ABOUT TASMANIAN DEVILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <br />
              <img src={Model1} width="100%" height="auto"></img>
              <br /> <br />
              <br /> Discover the myths, truths and totally wild trivia of these
              mysterious marsupials. Among Australia's collection of
              one-of-a-kind creatures, the Tasmanian “Tassie” devil is high on
              the list of stand-out members. Get ready to become an expert on
              these elusive, sometimes misunderstood cheeky little devils.
              <br />
              <br />
              <b> 1. THEY HAVE A LOUD, DISTURBING SCREAM</b>
              <br />
              <br /> If you thought frogs and crickets make the loudest evening
              noises, think again – Tasmanian ‘devils’ are named for the sound
              they make. In fact, the first European settlers to enter Tasmania
              (the southern state where they are found) began hearing unearthly,
              blood-curdling shrieks and growls from deep within the bush,
              making them imagine that demons surrounded them in the wilderness.
              Hence: Tasmanian ‘devils’. They make lots of strange sounds
              (coughs, growls, snorts, sniffs, screeches and even sneezes)
              usually to scare off other animals to avoid fights.
              <br />
              <br />{" "}
              <b>2. THEIR BITES ARE SO POWERFUL THEY COULD CRUSH YOUR BONES</b>
              <br />
              <br /> That’s right – Tasmanian devils deliver the strongest bite
              for its size of any mammal in the world. Their oversized heads
              allow them to open their jaws up to 80 degrees wide and their jaws
              carry enough brute force to crush bone. They can bite through the
              strongest of metals; even break the cages of livestock and other
              animals. Devils use their incredibly strong and powerful jaws to
              consume game or roadkill without any leftovers – they eat every
              part of their prey.
              <br />
              <br />
              <b> 3. THEY STORE FAT IN THEIR TAILS</b>
              <br />
              <br /> Like all marsupials, devils store fat in their tails, which
              thicken up like humans' waistlines. A particularly plump tail is a
              sign of a healthy Tassie devil and, considering they can eat up to
              40% of their bodyweight in one day, their tails can get mighty
              plump! 4. THEY SLEEP INSIDE THE BODIES OF THEIR PREY Tasmanian
              devils have a bit of a disturbing feeding habit. These mischievous
              little critters like to fall asleep inside a rotting carcass
              (called ‘carrion’) so they can wake up and continue eating. Though
              it sounds a little gruesome, by eating animal carcasses, Tassie
              devils actually help to keep areas hygienic and free from blowfly
              maggots.
              <br />
              <br />
              <b> 5. A DEVIL JOEY IS BORN THE SIZE OF A RICE GRAIN</b>
              <br />A <br /> mother Tassie gives birth to around 20-40 joeys at
              once. However, these joeys have to race to her pouch, which only
              has four teats. Talk about a hard start to life! Because of their
              tiny birth size, the ones that make it will live in their mother’s
              pouch for roughly three months. <br />
              <br />
              <b> 6. THEY ARE THE LARGEST CARNIVOROUS MARSUPIAL IN THE WORLD</b>
              <br /> <br />
              The Tassie devil has held this title for over 80 years. Tasmanian
              devils eat only meat: they hunt birds, snakes and other mammals up
              to the size of small kangaroos, but they will also eat carrion.
              They put those tremendous jaws to good use, eating pretty much
              anything they sink their teeth into, crushing and ravenously
              ingesting bones and all. <br /> <br />
              <b>7. THEY YAWN WHEN CONFRONTED</b> <br />
              <br /> Tasmanian devils are shy, timid and not dangerous to people
              unless attacked or trapped. However, when they do feel threatened,
              they do strange ‘yawns’ that look quite fierce. This behaviour is
              actually more a display of fear and anxiety than aggression.{" "}
              <br /> <br />
              <b> 8. THEY ARE SPECTACULAR TREE-CLIMBERS</b> <br /> <br />
              You might have heard of Tasmanian devils climbing trees, and you'd
              be right! Younger Tasmanian devils are a lot more agile and,
              unlike their elders, can climb trees. Why? Adult devils have been
              known to eat young devils if they are very hungry, so this
              climbing behaviour allows young ones to escape. Tasmanian devils
              are also incredible swimmers and can run at 24 kilometres per hour
              (15 miles per hour) for up to an hour straight. <br />
              <br />
              <b> 9. THEIR TEETH NEVER STOP GROWING</b> <br /> <br />a Tasmanian
              devil's teeth are unique! They have the same number of teeth as a
              dog (42), but unlike dogs, a devil's teeth grow continuously
              throughout its life, contributing to its phenomenal ability to
              consume the bones of its prey. <br /> <br />
              <b>10. THEY ARE ENDANGERED</b> Tasmanian devils have been
              considered to be endangered species since 2008; one of the primary
              causes being hit by cars when they attempt to retrieve roadkill.
              In addition, a facial tumor disease is spreading through the
              population. The tumors build up in affected animals' mouths and
              stop them from eating. Tens of thousands of Tasmanian devils have
              died since the disease appeared in the late 90s. Actors Elsa
              Pataky and Chris Hemsworth help release Tasmanian Devils into the
              wild on mainland Australia. © WildArk and Aussie Ark Chris
              Hemsworth and Elsa Pataky for #DevilsComeBack © WildArk and Aussie
              Ark. <br />
              {<br />}
              <br />
              <br /> <br />
              <br />
              <a href="https://www.youtube.com/watch?v=6r3_oVriZvw">
                Video Here1{" "}
              </a>{" "}
              <br />
              <br />
              <a href="https://www.youtube.com/watch?v=foinwHD6nDU">
                Video Here2{" "}
              </a>{" "}
              <br /> <br />
              <b>#DEVILCOMEBACK </b>
              <br />
              <br /> Alongside a team of conservationists from the organisation
              Aussie Ark, Aussie actor and Tourism Australia ambassador Chris
              Hemsworth has reintroduced 26 Tasmanian devils into a national
              park in eastern New South Wales, marking the first time the
              endangered species have roamed mainland Australia in 3,000 years.
              The reintroduction plan (#Devilcomeback) plans to release
              additional devils over the next two years. <br /> <br />
              <a href="https://devilsatcradle.com https://devilcomeback.org">
                Link-https://devilsatcradle.com https://devilcomeback.org
              </a>
              <a href="https://www.aussieark.org.au https://www.rewild.org/">
                Links :https://www.aussieark.org.au https://www.rewild.org/
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* //model right */}
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={true}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton onHide={handleClose1}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
