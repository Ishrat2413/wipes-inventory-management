import CarrierInformation from "@/components/account/track-order/carrier-info";
import DeliveryDetails from "@/components/account/track-order/delivery-details";
import DeliveryTrack from "@/components/account/track-order/delivery-track";
import TrackTitle from "@/components/account/track-order/track-title";

export default function TrackOrder() {
  return (
    <>
      <TrackTitle />
      <DeliveryTrack />
      <DeliveryDetails />
      <CarrierInformation />
    </>
  );
}
