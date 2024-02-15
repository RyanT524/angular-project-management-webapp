package com.cooksys.groupfinal.mappers;

import com.cooksys.groupfinal.dtos.AnnouncementDto;
import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.dtos.ProfileDto;
import com.cooksys.groupfinal.embeddables.Profile;
import com.cooksys.groupfinal.entities.Announcement;
import com.cooksys.groupfinal.entities.User;
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
public class AnnouncementMapperImpl implements AnnouncementMapper {

    @Autowired
    private BasicUserMapper basicUserMapper;

    @Override
    public AnnouncementDto entityToDto(Announcement announcement) {
        if ( announcement == null ) {
            return null;
        }

        AnnouncementDto announcementDto = new AnnouncementDto();

        announcementDto.setId( announcement.getId() );
        announcementDto.setDate( announcement.getDate() );
        announcementDto.setTitle( announcement.getTitle() );
        announcementDto.setMessage( announcement.getMessage() );
        announcementDto.setAuthor( basicUserMapper.entityToBasicUserDto( announcement.getAuthor() ) );

        return announcementDto;
    }

    @Override
    public Announcement dtoToEntity(AnnouncementDto announcementDto) {
        if ( announcementDto == null ) {
            return null;
        }

        Announcement announcement = new Announcement();

        announcement.setId( announcementDto.getId() );
        announcement.setDate( announcementDto.getDate() );
        announcement.setTitle( announcementDto.getTitle() );
        announcement.setMessage( announcementDto.getMessage() );
        announcement.setAuthor( basicUserDtoToUser( announcementDto.getAuthor() ) );

        return announcement;
    }

    @Override
    public Set<AnnouncementDto> entitiesToDtos(Set<Announcement> announcement) {
        if ( announcement == null ) {
            return null;
        }

        Set<AnnouncementDto> set = new HashSet<AnnouncementDto>( Math.max( (int) ( announcement.size() / .75f ) + 1, 16 ) );
        for ( Announcement announcement1 : announcement ) {
            set.add( entityToDto( announcement1 ) );
        }

        return set;
    }

    protected Profile profileDtoToProfile(ProfileDto profileDto) {
        if ( profileDto == null ) {
            return null;
        }

        Profile profile = new Profile();

        profile.setFirstName( profileDto.getFirstName() );
        profile.setLastName( profileDto.getLastName() );
        profile.setEmail( profileDto.getEmail() );
        profile.setPhone( profileDto.getPhone() );

        return profile;
    }

    protected User basicUserDtoToUser(BasicUserDto basicUserDto) {
        if ( basicUserDto == null ) {
            return null;
        }

        User user = new User();

        user.setId( basicUserDto.getId() );
        user.setProfile( profileDtoToProfile( basicUserDto.getProfile() ) );
        user.setActive( basicUserDto.isActive() );
        user.setAdmin( basicUserDto.isAdmin() );
        user.setStatus( basicUserDto.getStatus() );

        return user;
    }
}
