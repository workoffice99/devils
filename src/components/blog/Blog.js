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
              Discover the myths, truths and totally wild trivia of these
              mysterious marsupials. Among Australia's collection of
              one-of-a-kind creatures, the Tasmanian “Tassie” devil is high on
              the list of stand-out members. Get ready to become an expert on
              these elusive, sometimes misunderstood cheeky little devils.{" "}
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
        <div class="rightSide mt-4 mt-lg-0 col-12 col-sm-12 col-md-12 col-lg-5 p-3 text-white p-5">
          {" "}
          <span>Brief about tasmanian devil</span>
          <div className="bg-dark h-75 opacity-75 p-3">
            <p Style="font-size:1rem">
              The world's largest surviving carnivorous marsupial, the Tasmanian
              devil, has a thick-set, squat build, with a relatively large,
              broad head and short, thick tail. The fur is mostly black, with
              white markings on the rump, flanks and chest which vary in size
              and shape; some devils are pure black.{" "}
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
        size="xl"
      >
        <Modal.Header closeButton onHide={handleClose1}>
          <Modal.Title>Brief about tasmanian devil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <img src={Model1} width="100%" height="auto"></img>
          <br /> <br />
          <b>In Brief About Tasmanian Devils </b> <br /> <br />
          The world's largest surviving carnivorous marsupial, the Tasmanian
          devil, has a thick-set, squat build, with a relatively large, broad
          head and short, thick tail. The fur is mostly black, with white
          markings on the rump, flanks and chest which vary in size and shape;
          some devils are pure black. Body size also varies, depending on the
          diet and habitat. Adult males are larger than adult females and can
          weigh up to 14 kg and stand about 30 cm high at the shoulder. In the
          wild Tasmanian devils live up to six years. (not very long ) <br />
          <br />
          <b>History Tasmanian devils </b> <br />
          <br />
          once occurred on mainland Australia, with fossils having been found
          widely, but it is believed the devil became extinct on the mainland
          some 3500 years ago – long before European settlement. While it is not
          known exactly what happened to the devil on the mainland, it is likely
          that devils became extinct there due to aridity, changing climate and
          the spread of the dingo and possibly disease which was prevented from
          reaching Tasmania by Bass Strait. A necklace made of 178 pierced
          Tasmanian devil teeth was found at a burial site dated at around 7000
          years old.
          <br />
          <br /> Today the devil is a Tasmanian icon but this hasn’t always been
          the case.Tasmanian devils were considered a nuisance by early European
          settlers of Hobart Town, who complained of raids on poultry yards. In
          1830 the Van Diemen’s Land Co. introduced a bounty scheme to remove
          devils, as well as Tasmanian tigers and wild dogs, from their
          northwest properties: 2/6 (25 cents) for male devils and 3/6 (35
          cents) for females.
          <br />
          <br /> For more than a century, devils were trapped and poisoned and
          they became very rare, seemingly headed for extinction. But the
          population gradually increased after they were protected by law in
          June 1941. During 1996 it became evident that Tasmanian devils were
          again under threat - this time from Devil Facial Tumour Disease
          (DFTD).
          <br />
          <br />
          <b>Habitat</b> Despite the decline in numbers since the detection of
          DFTD in the 1990s, populations of Tasmanian devils remain widespread
          in Tasmania from the coast to the mountains. They live in coastal
          heath, open dry sclerophyll forest, and mixed sclerophyll-rainforest.
          Devils also take advantage of the interface between native habitat and
          agricultural paddocks, where their favourite prey species are often
          found.
          <br />
          <br />
          <b>Breeding </b>
          <br />
          <br /> Devils usually mate between February and May, and after a
          gestation period of 21 days the young are born. More young are born
          than can be accommodated in the mother's pouch which has four teats.{" "}
          <br /> <br /> Although four pouch young sometimes survive, the average
          number is two or three. Each young, firmly attached to a teat, is
          carried in the pouch for about four months. After this time, the young
          start venturing out of the pouch and are then left in a secure, dry
          den - often a wombat burrow. Young are weaned at eight to nine months
          of age and have usually left their mother to live alone by late
          December. These young then typically start breeding at the end of
          their second year. <br /> <br /> Research has shown that the presence
          of DFTD in a devil population over several years results in a change
          of breeding behaviour. Females begin to breed earlier, at one year
          old, but as they need to be physiologically ready to mate, often they
          won’t come into oestrus until well after the usual mating period. The
          result for the population is that there may be females with pouch
          young for most of the year, and juveniles dispersing from December
          through to June. This 'precocial breeding' also occurs in other
          low-density devil populations without DFTD. <br /> <br />
          <b> Diet</b> <br />
          <br />
          The Tasmanian devil is a scavenger and a hunter feeding on whatever
          animal is available. Powerful jaws and teeth enable it to devour its
          prey - bones, fur and all. Native animals such as wallabies, possums
          and wombats are favourites. Various small mammals and birds are eaten
          - either as carrion or prey. Reptiles, amphibians, insects and even
          sea squirts have been found in the stomachs of wild devils. Carcasses
          of sheep and cattle provide food in farming areas. Tasmanian devils
          maintain bush and farm hygiene by cleaning up carcasses. This can help
          reduce the risk of blowfly strike to sheep by removing food for
          maggots.
          <br />
          <br />
          <b> Behaviour </b>
          <br />
          <br />
          The Tasmanian devil is generally nocturnal (active after dark). During
          the day it usually hides in a den, or dense bush. They roam
          considerable distances - up to 16 km in one night- along well-defined
          trails in search of food. Devils usually amble slowly with a
          characteristic gait but can gallop quickly with both hind feet
          together. Young Tasmanian devils are more agile than adults and can
          climb trees. Although not territorial, devils have a home range which
          can be very large if resources are scarce.
          <br />
          <br /> Tasmanian devils are also very good swimmers, however if they
          have young in the pouch they avoid swimming for more than very short
          distances. Tasmanian devils actually love water and will wade and
          splash about, even sitting or lying down in it to stay cool and play.
          They will often dabble in water with their front paws, somewhat in the
          manner of racoons.
          <br />
          <br /> The famous gape or yawn of the Tasmanian devil that looks so
          threatening, can be misleading. This display is performed more from
          fear and uncertainty than from aggression. Despite common perception,
          Tasmanian devils do not have a strong body odour, but their scats can
          be very smelly, typical of all carnivores. They have an anal scent
          gland which they use to mark their presence and they use latrines to
          gather and disperse information.
          <br />
          <br /> The Tasmanian devil makes a variety of fierce noises, from
          harsh coughs and snarls to high pitched screeches. Many of these
          vocalisations are bluff and part of a ritual to minimise harmful
          fighting when feeding communally at a large carcass.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
