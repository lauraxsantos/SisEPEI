package br.upe.sisepei.sisepei.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
	
	private final JwtAuthenticationFilter jwtAuthFilter;
	
	private final AuthenticationProvider authenticationProvider;
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		//TODO: AS Authenticated não pega
		http
		.csrf()
		.disable()
		.authorizeHttpRequests()
		.requestMatchers("/login")
		.permitAll()
		.requestMatchers(HttpMethod.POST, "/usuarios")
		.permitAll()
		.requestMatchers(HttpMethod.GET, "/usuarios/**")
		.anonymous()
//		.requestMatchers(HttpMethod.PUT, "/usuarios")
//		.authenticated()
//		.requestMatchers(HttpMethod.DELETE, "/usuarios/**")
//		.authenticated()
		.requestMatchers(HttpMethod.GET, "/edital/**")
		.authenticated()
		.requestMatchers(HttpMethod.POST, "/edital")
		.hasAnyRole("COORDENADOR_INOVACAO", "COORDENADOR_PESQUISA", "COORDENADOR_EXTENSAO")
		.requestMatchers(HttpMethod.PUT, "/edital/**")
		.hasAnyRole("COORDENADOR_INOVACAO", "COORDENADOR_PESQUISA", "COORDENADOR_EXTENSAO")
		.requestMatchers(HttpMethod.DELETE, "/edital/**")
		.hasAnyRole("COORDENADOR_INOVACAO", "COORDENADOR_PESQUISA", "COORDENADOR_EXTENSAO")
		.requestMatchers("/perfis**")
		.authenticated()
		.requestMatchers("/perfis/**")
		.hasRole("ADMINISTRADOR")
		.anyRequest()
		.authenticated()
		.and()
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.authenticationProvider(authenticationProvider)
		.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}
}
