import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      portrait
      className="rounded-2xl"
      itemOne={<ReactCompareSliderImage alt="original photo" src={original} />}
      itemTwo={<ReactCompareSliderImage alt="generated photo" src={restored} />}
    />
  );
};
