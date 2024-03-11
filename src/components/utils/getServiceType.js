import { useGetServicesQuery } from 'store/reducers/serviceApi';

export default function useGetServiceType(id) {
  const { data: services = [], isLoading, isError } = useGetServicesQuery();
  if (isLoading || isError) {
    return null;
  }
  if (!id || !services.length) {
    return null;
  }
  let service = services.find((service) => service.id.toString() === id.toString());
  if (service.title.includes('работка приложений')) return 'app';
  if (service.title.includes('работка сайт')) return 'website';
  if (service.title.includes('SEO')) return 'seo';
  if (service.title.includes('изайн')) return 'design';
  if (service.title.includes('регатор')) return 'delivery';
  if (service.title.includes('CRM')) return 'crm';
}
