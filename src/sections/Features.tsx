import { Section } from '@/layout/Section';
import { FeatureRow } from '@/components/FeatureRow';

const Features = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <FeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="https://dummyimage.com/600x400/ff9d00/fff"
      imageAlt="First feature alt text"
    />
    <FeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="https://dummyimage.com/600x400/ff9d00/fff"
      imageAlt="Second feature alt text"
      reverse
    />
    <FeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="https://dummyimage.com/600x400/ff9d00/fff"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { Features };
