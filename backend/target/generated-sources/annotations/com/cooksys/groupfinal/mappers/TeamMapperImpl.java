package com.cooksys.groupfinal.mappers;

import com.cooksys.groupfinal.dtos.TeamDto;
import com.cooksys.groupfinal.entities.Team;
import java.util.HashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-04T15:11:33-0500",
    comments = "version: 1.4.1.Final, compiler: javac, environment: Java 17.0.3 (Eclipse Adoptium)"
)
@Component
public class TeamMapperImpl implements TeamMapper {

    @Autowired
    private BasicUserMapper basicUserMapper;

    @Override
    public TeamDto entityToDto(Team team) {
        if ( team == null ) {
            return null;
        }

        TeamDto teamDto = new TeamDto();

        teamDto.setId( team.getId() );
        teamDto.setName( team.getName() );
        teamDto.setDescription( team.getDescription() );
        teamDto.setTeammates( basicUserMapper.entitiesToBasicUserDtos( team.getTeammates() ) );

        return teamDto;
    }

    @Override
    public Set<TeamDto> entitiesToDtos(Set<Team> teams) {
        if ( teams == null ) {
            return null;
        }

        Set<TeamDto> set = new HashSet<TeamDto>( Math.max( (int) ( teams.size() / .75f ) + 1, 16 ) );
        for ( Team team : teams ) {
            set.add( entityToDto( team ) );
        }

        return set;
    }
}
