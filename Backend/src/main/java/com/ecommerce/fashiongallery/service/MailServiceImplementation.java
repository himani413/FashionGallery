package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.entity.User;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class MailServiceImplementation implements MailService {

    private final JavaMailSender mailSender;
    @Override
    public void send(User user, String token) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setTo(user.getEmail());
            helper.setSubject("Fashion Gallery");
            helper.setFrom("dinukaekanayaka18@gmail.com");

            String content = "Hey "+user.getFname()+" "+user.getLname()+",<br><br>"
                + "Please get below code to verify your registration:<br>"
                + "Device: Chrome on Windows"
                + "<h3>verification code : "+token+"</h3>"
                + "Thank you,<br>"
                + "Fashion Gallery";

            helper.setText(content,true);
            mailSender.send(mimeMessage);

        } catch (MessagingException e) {
            Logger.getLogger("failed to send email");
        }
    }

}
