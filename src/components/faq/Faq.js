import React, { useEffect, useState } from "react";
import "./Faq.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title:
        "  1. What is Devil Facial Tumour Disease?",
      content: `Devil Facial Tumour Disease (DFTD) is a term used to describe a fatal condition in Tasmanian devils which is characterised by the appearance of obvious facial cancers. The tumours are first noticed in and around the mouth as small lesions or lumps. These develop into large tumours around the face and neck and sometimes even in other parts of the body. Badly affected devils have many cancers throughout the body. Affected animals appear to die within a few months of the cancer being visible. Death results from starvation and the breakdown of body functions as a result of the cancer. DFTD is extremely unusual as it is only one of 8 recorded cancers that can spread like a contagious disease. The arrival of the Devil Facial Tumour Disease Strain Two (DFTD2) is of concern. This cancer could have evolved independent of Devil Facial Tumour Disease Strain 1 (DFTD1) or it could have been a fusion between DFTD1 and its host. If the latter is the case, it does increase the chance that this cell line can take on its hosts, and plausibly another species genome in place of its own. There is no evidence that this is the case, but work on DFTD2 raises these two origins for future investigation.`,
    },
    {
      title:
        "  2. How does DFTD1 differ from DFTD2?",
      content: `DFTD1 was first recorded in 1996 is of female origin. Over time it has evolved into different strains and is found through Tasmania. In contrast DFTD2 was first recorded in 2014 and is of male origin. So far DFTD2 has only be found in the Channel area (in the south of the state). While there are differences between the two types of cancer, both DFTD1 and DFTD2 are contagious and fatal.`,
    },
    {
      title:
        "3. How do Tasmanian devils catch Devil Facial Tumour Disease?",
      content: `DFTD is passed from devil to devil through contact, including biting associated with copulation and fighting. The live tumour cells aren't rejected by the devil’s immune system because of the cancer’s ability to ‘hide’ from the immune system. Trials continue to be held in order to examine the transmission of DFTD. Results support the hypothesis that we are dealing with a transmissible cancer and that cancerous cells are passed directly between devils as an allograft. Put more simply, we are getting more and more evidence to support the theory that DFTD is spread by the cancer cells themselves being passed from one animal to another. Updated April 2018`,
    },
    {
      title:
        "4. Do you treat the Devil Facial Tumour Disease in individuals?",
      content: `Treatment for individuals has not yet been trialled for the following reasons: • Initially we needed to make the best use of available resources by investing time into managing wild devil populations. • Most importantly, if a cure for this disease is found, we need to be able to use it from a wildlife management point of view rather than on individual animals - we want to keep the devils wild and in the wild. • Surgery and chemotherapy would be difficult, if not impossible, to implement from a population point of view. Nevertheless, nothing is ruled out that may help to save the devil, and research is proposed to investigate the possibility and feasibility of cancer treatment for devils in some limited situations. Especially as a tool for Wild Devil Recovery where sustaining life of a mum for an extra period could allow her to wean her young. This could be a valuable tool in the future.`,
    },
    {
      title:
        "5. Can Devil Facial Tumour Disease spread to other animals?",
      content: `The Mount Pleasant Laboratories, in Launceston, are the only animal health laboratories in Tasmania, and handle all cases concerning farmed and wild animals. To date, they have found no evidence of DFTD in other animals. The Program’s field team trapping surveillance has caught many species that showed no clinical signs of the disease. Species include possums, quolls, cats and even a sausage dog.`,
    },
    {
      title:
        "6. If Devil Facial Tumour Disease is a form of cancer, how can it be contagious?",
      content: `Devil Facial Tumour Disease is extremely rare. Under normal circumstances cancer cannot be “caught”. The cancer cells from one individual are completely different to another individual’s, and when transferred should be rejected by the immune system. So the fact that DFTD breaks this rule raises many questions about the immune system of the Tasmanian devil. Researchers at the Menzies Research Institute, led by Associate Professor Greg Woods, and Professor Kathy Belov at the University of Sydney, confirmed that Tasmanian devils have a fully functional immune system. The devil-to-devil transmission suggests that this cancer is similar to a transplant - but rather than a transplant of a life-saving organ, the transplant is a life-threatening cancer. Further laboratory tests investigated whether the Tasmanian devil has the correct genes to allow recognition of foreign cells. This was performed by mixing lymphocytes (the key cell in the immune system) from many devils to see if they reacted to each other. The results from these studies clearly showed that Tasmanian devils failed to recognise cells from other devils as different. This provides strong evidence that a lack of genetic diversity contributes to the cancer being infectious. When a healthy devil is infected with DFTD from another animal, the infected devil’s immune system assumes that the new cancer cells are the same as its own cells and fails to reject them. The daunting task ahead is to learn how to persuade the devil’s immune system to recognise the cancer cells as hostile infectious agents, which will then alert the devil’s immune system to destroy these cancer cells. There has been progress with this through the immunisation program. Updated April 2018`,
    },
    {
      title:
        "7. Are Tasmanian devils endangered?",
      content: `In May 2009, the Australian Government listed the Tasmanian devil as Endangered under national environmental law. It is also listed as Endangered under the Tasmania’s Threatened Species Protection Act 1995. The Tasmanian devil has also been listed as Endangered on the Red List of the International Union for the Conservation of Nature and Natural Resources (IUCN) – the benchmark for the global conservation status of plant and animal species. In the mid-1990s, the first signs were observed of the fatal and infectious cancer, DFTD. Sightings of the Tasmanian devil have since declined by more than 75 per cent. In September 2006 Devil Facial Tumour Disease was gazetted under the Animal Health Act 1995 as a List B notifiable disease.`,
    },
    {
      title:
        "8. Could the devil facial tumours be caused by an accumulation of exposure to the UV rays radiating through our ozone depleted skies?",
      content: `There is no evidence to date that this is the case. It’s true that there is growing evidence to suggest that squamous cell carcinoma (SCC) and melanomas are initiated by solar damage. Also, osteosarcoma of large breed dogs is thought to be initiated or promoted by repetitive trauma. Animals in parks and zoos (including those in Tasmania) are less “shy” and do sunbake. But there has been no evidence to date to suggest that DFTD has spontaneously arisen in captive populations. We have had no cases of melanomas or SCCs. Neoplasms initiated/promoted from trauma and UV damage usually occur as a result of having a degree of chronicity of exposure. There was support for this hypothesis when it was found that older animals were initially the only ones affected by the disease (three to four year olds), however it has now been shown that one to two year olds are affected. We have found evidence supporting our theory that the disease is acting as a contagious allograft – a “parasite” in effect.`,
    },
    {
      title:
        "9. Is Devil Facial Tumour Disease and the Platypus Mucormycosis disease in Tasmania related or caused by the same thing?",
      content: `No. While affected devils and platypus can suffer from similar external symptoms (both can develop ugly ulcers or lesions), the diseases are caused by completely different mechanisms, and occur on different parts of the body. Diseased devils suffer from facial tumours, while the lesions on diseased platypus are generally around the tail, back or back legs. DFTD is an infectious cancer, where malignant growths or tumours are caused by abnormal and uncontrolled cell division. The disease is contagious and thought to be spread by infected devils biting other devils. There is currently no evidence that the disease has spread to other species of wildlife or domestic animals. Mucormycosis, the disease affecting Tasmanian platypus populations, is caused by the fungus Mucor amphibiorum. Currently little is known about how the fungus is transferred between platypuses, how it is spread, or what impacts it is having. DFTD has had a devastating effect on devil populations throughout Tasmania in just over a decade since it was first detected. However in the 25 years since Mucormycosis was first detected in Tasmania we still don’t know what impact it is having on platypus populations, or how far it has spread. These questions are being addressed in a research program within Tasmania’s Department of Primary Industries, Parks, Water and Environment. Read more about Mucormycosis and the platypus conservation program at www.dpipwe.tas.gov.au.`,
    },
  ],
};

const styles = {
  bgColor: "transparet",
  titleTextColor: "blue",
  rowTitleColor: "black",
  rowContentColor: "black",
  rowContentPaddingBottom: "20px",
  arrowColor: "black",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

export default function FAQ() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-12 col-lg-12" Style="font-size: 20px;padding-left:0;">
            <span>THINGS ALL ARE ASKING</span>
          </div>
          <div
            class="col-12 col-lg-12"
            Style="font-size: 45px;padding-left:0; "
          >
            FAQ
          </div>
        </div>
        <div className="row">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
}
