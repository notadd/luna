create view room_with_join_count as select r.*, count(m.*) as join_count from room as r left join room_member as m on r."id" = m."roomId" group by r.id;

