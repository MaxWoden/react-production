import { Notification } from "entities/Notification/model/types/notification";
import { rtkApi } from "shared/api/rtkApi";

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationsByUserId: build.query<Notification[], string>({
      query: (userId: string) => ({
        url: "/notifications",
        params: {
          userId,
        },
      }),
    }),
  }),
});

export const useNotificationsByUserId =
  notificationApi.useGetNotificationsByUserIdQuery;
